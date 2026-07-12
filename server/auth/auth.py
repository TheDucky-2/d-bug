from pwdlib import PasswordHash
from fastapi import Request, HTTPException, Response
from logger.logger import create_logger
from fastapi.security import HTTPBearer
from utils.jwt_token import verify_refresh_token, generate_access_token, verify_access_token
import os
from dotenv import load_dotenv
load_dotenv()
from fastapi import HTTPException

logger = create_logger()

password_hash = PasswordHash.recommended()

bearer_scheme = HTTPBearer()

ENVIRONMENT = os.environ["ENVIRONMENT"]


def hash_password(password: str):
    return password_hash.hash(password=password)

def verify_hash(password:str, hashed_password: str):
    
    verified_hash = password_hash.verify(password=password, hash=hashed_password)

    if not verified_hash:
        logger.info("Hash Verification Failed")
        raise HTTPException(status_code=401, detail="Incorrect username or password.")


def get_current_user(request:Request, response:Response):
    
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

        return user_id 
    
    # if missing user_id
    user_id = decoded_access_token.get("user_id")

    if not user_id:
        raise HTTPException(status_code=404, detail="Missing user_id")
    
    return user_id
    
