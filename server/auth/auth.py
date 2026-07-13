from pwdlib import PasswordHash
from fastapi import Request, HTTPException, Response
from logger.logger import create_logger
from fastapi.security import HTTPBearer
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
