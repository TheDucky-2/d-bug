from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.db import get_db


project_router = APIRouter(prefix="/projects", tags=["projects"])

@project_router.get("/")
def get_projects(project_id: int, db:Session = Depends(get_db)):
    return 

@project_router.get("/{project_id}")
def get_project_under_organization_by_id(project_id: int, db: Session = Depends(get_db)):
    return 

@project_router.put("/{project_id}")
def update_project_under_organization_by_id(project_id: int, db: Session = Depends(get_db)):
    return 

@project_router.delete("/{project_id}")
def delete_project_under_organization_by_id(project_id: int, db: Session = Depends(get_db)):
    return 