from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.db import get_db

user_router = APIRouter(prefix="/users", tags=["users"])


@user_router.get("/")
def get_all_users(db:Session = Depends(get_db)):
    return 

@user_router.get("/{id}")
def get_user(id: int, db: Session = Depends(get_db)):
    return 

@user_router.delete("/{id}")
def delete_user(id: int,  db:Session = Depends(get_db)):
    return

@user_router.put("/{id}")
def update_user(id: int, db:Session = Depends(get_db)):
    return 
