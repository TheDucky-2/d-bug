import jwt
from jwt import PyJWTError 
from datetime import datetime, timedelta, timezone
from fastapi import HTTPException
import os
from dotenv import load_dotenv
load_dotenv()

SECRET_KEY = os.environ["JWT_SECRET"]
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 15
REFRESH_TOKEN_EXPIRE_DAYS = 30

def generate_access_token(data: dict):
    to_encode = data.copy()

    expires_in = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    ## adding expiration time to data

    to_encode.update({"type": "access_token", "exp" : expires_in})


    access_token = jwt.encode(payload=to_encode, key=SECRET_KEY, algorithm=ALGORITHM)

    return access_token

def generate_refresh_token(data: dict):
    to_encode = data.copy()

    expires_in = datetime.now(timezone.utc) + timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)

    to_encode.update({"type": "refresh_token","exp": expires_in})

    refresh_token = jwt.encode(to_encode, key=SECRET_KEY, algorithm=ALGORITHM)

    return refresh_token

def verify_token(token):

    try:
        decoded = jwt.decode(token, SECRET_KEY, ALGORITHM)

        if not decoded:
            return None
        
        return decoded

    except PyJWTError:
        return


