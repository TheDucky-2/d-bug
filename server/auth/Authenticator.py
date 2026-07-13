"Class for handling authentication logic"

from fastapi import Request, Response, Depends, HTTPException
from schemas.user import UserCreate, UserLogin, UserResponse
from datetime import datetime, timezone, timedelta
from sqlalchemy.orm import Session
from config.db import get_db
from models import User, RefreshToken
from auth.auth import hash_password, verify_hash
from utils.jwt_token import generate_access_token, generate_refresh_token, hash_token, verify_access_token, verify_refresh_token
from logger.logger import create_logger
import os
from dotenv import load_dotenv
load_dotenv()


logger = create_logger()
ENVIRONMENT = os.environ["ENVIRONMENT"]

class Authenticator:

    def __init__(self):
        pass
        

    def sign_up(self, user:UserCreate, db:Session):
        
        existing_user = db.query(User).filter(User.email == user.email).first()

        if existing_user:
            raise HTTPException(status_code = 409, detail = "User already exists! Please login")
        
        # if user does not exist

        hashed_password = hash_password(user.password)

        if not hashed_password:
            logger.info("Password hashing failed during sign-up")
            raise HTTPException(status_code=500, detail ="Unable to sign up!")
        
        new_user_data = {
            "full_name": user.full_name,
            "email": user.email,
            "password": hashed_password,
            }
        
        new_user = User(**new_user_data)

        db.add(new_user)

        db.commit()
        db.refresh(new_user)

        return {
            "message": "Account Created Successfully!",

            "data":{
                "user_id" : new_user.user_id,
                "full_name": new_user.full_name,
                "email": new_user.email,
                "organization_id": new_user.organization_id
            },
            
        }
        
    
    def sign_in(self, user:UserLogin, response:Response, db:Session):

        # check if user already exists
        existing_user = db.query(User).filter(User.email == user.email).first()

        if not existing_user:
            logger.info("User does not exist in the database")
            raise HTTPException(status_code=404, detail="User does not exist. Please sign up!")
        
        # verify password hash
        verify_hash(user.password, existing_user.password)
        
        payload_response = {
            "user_id" : existing_user.user_id,
            "email" : existing_user.email
        }
        
        # generate access tokens
        access_token = generate_access_token(payload_response)

        refresh_token = generate_refresh_token(payload_response)

        # store hash of refresh token in the database
        token_record = RefreshToken(
            user_id = existing_user.user_id,
            token_hash = hash_token(refresh_token),
            expires_in = datetime.now(timezone.utc) + timedelta(days=30)
        )

        db.add(token_record)
        db.commit()

        # add cookies for the browser

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
        "data":{
            "user_id": existing_user.user_id,
            "full_name": existing_user.full_name,
            "email": existing_user.email,
            "organization_id": existing_user.organization_id
        },
        "message": "Login successful!"
    }

    def sign_out(self,request: Request, response: Response, db:Session):

        refresh_token = request.cookies.get("refresh_token")

        if not refresh_token:
            logger.info("Refresh token missing or expired!")
            raise HTTPException(status_code=404, detail="Missing token")

        hashed_refresh_token = hash_token(refresh_token)

        # deleting the refresh token to ensure user does not have active refresh token after sign out
        db.query(RefreshToken).filter(RefreshToken.token_hash == hashed_refresh_token).delete()

        db.commit()

        response.delete_cookie(
            key="access_token",
            httponly=True,
            secure=(ENVIRONMENT == "production"),
            samesite="lax"
        )

        response.delete_cookie(
            key="refresh_token",
            httponly=True,
            secure=(ENVIRONMENT == "production"),
            samesite="lax"
        )

        return {
            "success": True,
            "message": "Logout Successful"
        }
    
    @staticmethod
    def serialize_user_response(user:User)-> UserResponse:
        return UserResponse(
            user_id=user.user_id,
            full_name=user.full_name,
            email=user.email,
            user_type= user.user_type,
            role= user.role,
            organization_id = user.organization_id,
            subscription=user.subscription,
            created_at=user.created_at
            )

    @staticmethod
    def get_current_user(request:Request, response:Response, db:Session ):
    
        access_token = request.cookies.get("access_token") 
        refresh_token = request.cookies.get("refresh_token")

        decoded_access_token = None

        # if access token exists, fetch user id from decoded token 
        if access_token:
            decoded_access_token = verify_access_token(access_token)

        # if access token does not exist, check if refresh token exists
        if decoded_access_token is None:
            if not refresh_token:
                raise HTTPException(status_code=401, detail="Invalid or missing tokens")
            
            # if refresh token exists, verify it and decode to get user id
            decoded_refresh_token = verify_refresh_token(refresh_token)

            if decoded_refresh_token is None:
                raise HTTPException(status_code=401, detail="Invalid or missing refresh token")
            
            user_id = decoded_refresh_token.get("user_id")

            if not user_id:
                logger.info("Missing user_id")
                raise HTTPException(status_code=404, detail="Missing credentials")
            
            # generating a new access token with the user id

            new_access_token = generate_access_token({"user_id" : user_id})

            # setting the cookie with access token

            response.set_cookie(
                key="access_token",
                value=new_access_token,
                httponly=True,
                secure= (ENVIRONMENT == "production"),
                samesite="lax"
            )

            user = db.query(User).filter(User.user_id == user_id).first()

            if not user:
                raise HTTPException(status_code=404, detail="Missing user")
            
            return Authenticator.serialize_user_response(user)
        
        
        # if missing user_id
        user_id = decoded_access_token.get("user_id")

        if not user_id:
            raise HTTPException(status_code=404, detail="Missing user_id")
        
        user = db.query(User).filter(User.user_id == user_id).first()

        if not user:
            raise HTTPException(status_code=404, detail="Missing user")
        
        return Authenticator.serialize_user_response(user)