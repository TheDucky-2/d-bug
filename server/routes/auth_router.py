from fastapi import APIRouter, Depends, Response, Request, Body
from sqlalchemy.orm import Session
from config.db import get_db
from schemas.user import UserCreate,UserLogin, UserResponse
from services.Authenticator import Authenticator
import os
from logger.logger import create_logger
from dotenv import load_dotenv
load_dotenv()

auth_router = APIRouter(prefix="/auth",tags=["Authentication"])

logger = create_logger(name=__name__.split('.')[1])

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

@auth_router.post("/forgot-password")
def reset_password(
    email:str = Body(str) ,
    db:Session = Depends(get_db),
    auth = Depends(Authenticator)):

    return auth.send_reset_password_link(email = email, db = db)

@auth_router.get("/me", response_model=UserResponse)
def get_current_user(
    request:Request, 
    response:Response, 
    db:Session = Depends(get_db), 
    auth = Depends(Authenticator),
    
    ):

    return auth.get_current_user(request=request, response=response, db=db)
