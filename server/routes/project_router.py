from fastapi import APIRouter, Depends, Body, Form
from sqlalchemy.orm import Session
from config.db import get_db
from services.ProjectService import ProjectService
from schemas.project import ProjectCreate
from services.Authenticator import Authenticator
from validators.organization import validate_organization
from services.Authenticator import Authenticator


project_router = APIRouter(prefix="/projects", tags=["projects"])

@project_router.post("/")
def create_project(
        project: ProjectCreate,
        project_service = Depends(ProjectService),
        db:Session = Depends(get_db),
        user =  Depends(Authenticator.get_current_user),
        organization = Depends(validate_organization),
        
    ):

    return project_service.create_project(
        name = project.name, 
        description = project.description, 
        category=project.category, 
        db=db,
        organization= organization,
        user = user
    )


@project_router.get("/")
def get_projects(
    db:Session = Depends(get_db),
    organization = Depends(validate_organization),
    project_service = Depends(ProjectService)):

    return project_service.get_projects(
        db =db,
        organization = organization
    )

@project_router.get("/{project_id}")
def get_project_under_organization_by_id(project_id: int, db: Session = Depends(get_db)):
    return 

@project_router.put("/{project_id}")
def update_project_under_organization_by_id(project_id: int, db: Session = Depends(get_db)):
    return 

@project_router.delete("/{project_id}")
def delete_project_under_organization_by_id(project_id: int, db: Session = Depends(get_db)):
    return 