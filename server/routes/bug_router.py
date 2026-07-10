from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.db import get_db

bug_router = APIRouter(prefix="/bugs",tags=["bugs"])

@bug_router.post("/")
def create_new_bug(db:Session = Depends(get_db)):
    return

@bug_router.get("/")
def get_all_bugs(db:Session = Depends(get_db)):
    return 

@bug_router.get("/{bug_id}")
def get_bug_by_id(bug_id: int, db: Session = Depends(get_db)):
    return 

@bug_router.delete("/{bug_id}")
def delete_bug(bug_id: int, db:Session = Depends(get_db)):
    return

@bug_router.put("/{bug_id}")
def update_bug(bug_id:int, db:Session = Depends(get_db)):
    return 

@bug_router.patch("/{bug_id}/priority")
def update_priority(bug_id: int, db:Session = Depends(get_db)):
    return 

@bug_router.patch("/{bug_id}/assignee")
def update_assignee(bug_id: int, db:Session = Depends(get_db)):
    return 
    
@bug_router.patch("/{bug_id}/status")
def update_status(bug_id: int, db:Session = Depends(get_db)):
    return 

@bug_router.patch("/{bug_id}/severity")
def update_severity(bug_id: int, db:Session = Depends(get_db)):
    return 

@bug_router.post("/{bug_id}/add_comment")
def add_comment(bug_id: int, db:Session = Depends(get_db)):
    return 

