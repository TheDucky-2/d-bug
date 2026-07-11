from auth.auth import get_current_user
from fastapi import Depends, HTTPException
from config.db import get_db
from sqlalchemy.orm import Session
from models.User import User


def validate_user(user_id:int = Depends(get_current_user), db: Session = Depends(get_db)):
    # Validating user
    user = db.query(User).filter(User.id == user_id).first()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    return user