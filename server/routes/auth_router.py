from fastapi import APIRouter, Depends, Response, HTTPException, Request
from sqlalchemy.orm import Session
from config.db import get_db
from auth.auth import hash_password, verify_hash
from utils.jwt_token import generate_access_token, generate_refresh_token, hash_token
from models import User, RefreshToken
from schemas.user import UserCreate, UserResponse, UserLogin
from errors.auth_errors import PasswordHashingError
from datetime import datetime, timedelta, timezone
from services.Authenticator import Authenticator
import os
from logger.logger import create_logger
from dotenv import load_dotenv
load_dotenv()

auth_router = APIRouter(prefix="/auth",tags=["Authentication"])

logger = create_logger()

ENVIRONMENT = os.environ["ENVIRONMENT"]


@auth_router.post("/sign-up")
def sign_up(user: UserCreate , db: Session = Depends(get_db), auth = Depends(Authenticator)):

    return auth.sign_up(user, db)

@auth_router.post("/sign-in")
def sign_in(user:UserLogin, response:Response, db: Session = Depends(get_db),  auth = Depends(Authenticator)):

    return auth.sign_in(user=user, response=response, db = db)  

@auth_router.post("/sign-out")
def sign_out(request: Request, response: Response,db: Session = Depends(get_db),  auth = Depends(Authenticator)):

    return auth.sign_out(request=request, response=response, db=db)

@auth_router.get("/me")
def get_current_user(request:Request, response:Response, db:Session = Depends(get_db), auth = Depends(Authenticator)):

    return auth.get_current_user(request=request, response=response, db=db)
