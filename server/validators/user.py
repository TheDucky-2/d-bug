from services.Authenticator import Authenticator
from fastapi import Depends, HTTPException, Request, Response
from sqlalchemy.orm import Session
from models.User import User
from config.db import get_db


def validate_user(request:Request, response:Response, db:Session = Depends(get_db)):

    current_user = Authenticator.get_current_user(request=request, response=response, db=db)
    
    # Validating user
    user = db.query(User).filter(User.user_id == current_user.user_id).first()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    return user