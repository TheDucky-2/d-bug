from fastapi import APIRouter, Depends, Response, HTTPException, Request
from sqlalchemy.orm import Session
from config.db import get_db
from auth.auth import hash_password, verify_hash
from utils.jwt_token import generate_access_token, verify_token, generate_refresh_token
from models import User, RefreshToken
from schemas.user import UserCreate, UserResponse, UserLogin
from errors.auth_errors import PasswordHashingError
from datetime import datetime, timedelta, timezone
import os
from logger.logger import create_logger
from dotenv import load_dotenv
load_dotenv()

auth_router = APIRouter(prefix="/auth",tags=["Authentication"])

logger = create_logger()

ENVIRONMENT = os.environ["ENVIRONMENT"]


@auth_router.post("/sign-up")
def sign_up(user: UserCreate , db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        raise HTTPException(status_code = 409, detail = "User already exists! Please login")

    hashed_password = hash_password(user.password)

    if not hashed_password:
        logger.info("Password hashing failed during sign-up")
        raise PasswordHashingError("Authentication Error!")
    
    
    new_user_data = {
        "full_name": user.full_name,
        "email": user.email,
        "password": hashed_password,
        }
    
    new_user = User(**new_user_data)


    db.add(new_user)
    db.flush()

    db.commit()

    return {"success": True, "message": "Account Created Successfully!"}

@auth_router.post("/sign-in")
def sign_in(user:UserLogin, response:Response, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(User.email == user.email).first()

    if not existing_user:
        logger.info("User does not exist in the database")
        raise HTTPException(status_code=404, detail="U$2b$12$7GkzL8..ser not found")
    
    verify_hash(user.password, existing_user.password)
    
    payload_response = {
        "user_id" : existing_user.id,
        "email" : existing_user.email
    }
    
    access_token = generate_access_token(payload_response)

    refresh_token = generate_refresh_token(payload_response)

    token_record = RefreshToken(
        user_id = existing_user.id,
        token_hash = hash_password(refresh_token),
        expires_in = datetime.now(timezone.utc) + timedelta(days=30)
    )

    db.add(token_record)
    db.commit()

    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        secure=(ENVIRONMENT == "production"),
        samesite="lax",
        max_age=30*24*60*60
    )

    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        secure=(ENVIRONMENT == "production"),
        samesite="lax",
        max_age=15*60
    )


    return {
        "success": True,
        "message": "Login successful!",
    }

@auth_router.post("/sign-out")
def sign_out(response: Response):
    
    response.delete_cookie(
        key="access_token", secure=False, httponly=True, samesite="lax")

    return {
        "success": True,
        "message": "Logout Successful"
    }
