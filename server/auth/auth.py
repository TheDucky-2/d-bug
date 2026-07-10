from pwdlib import PasswordHash
from fastapi import Request, Depends, HTTPException
from logger.logger import create_logger
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from utils.jwt_token import verify_token

from fastapi import HTTPException

logger = create_logger()

password_hash = PasswordHash.recommended()

bearer_scheme = HTTPBearer()

def hash_password(password: str):
    return password_hash.hash(password=password)

def verify_hash(password:str, hashed_password: str):
    
    verified_hash = password_hash.verify(password=password, hash=hashed_password)

    if not verified_hash:
        logger.info("Hash Verification Failed")
        raise HTTPException(status_code=401, detail="Incorrect username or password.")


def get_current_user(request:Request):
    
    token = request.cookies.get("access_token")

    # verify token
    if not token:
        raise HTTPException(status_code=401, detail="Missing token")
    
    decoded = verify_token(token)
    print(decoded)

    if decoded is None:
        raise HTTPException(status_code=401, detail="Invalid or missing token")
    
    # if missing user_id
    user_id = decoded.get("user_id")

    if not user_id:
        raise HTTPException(status_code=404, detail="Missing user_id")
    
    return user_id
       