from sqlalchemy.orm import Session
from fastapi import Form, HTTPException
from models.Project import Project
from schemas.project import ProjectResponse
from services.Authenticator import Authenticator

class ProjectService:

    def __init__(self):
        pass

    def create_project(self,  
                       db:Session,
                       organization,
                       user,
                       project_name:str = Form(...), 
                       project_category:str = Form(...), 
                       project_description:str | None = Form(None), 
                       ):

        existing_project = db.query(Project).filter(
            Project.project_name == project_name,
            Project.project_category == project_category,
            Project.organization_id == organization.organization_id
        ).first()

        if existing_project:
            raise HTTPException(status_code = 409, detail="Project already exists!")
        
        project = Project(
            project_name=project_name,
            project_category=project_category,
            description= project_description,
            organization_id = organization.organization_id,
            project_owner = user.user_id
        )

        db.add(project)
        db.commit()
    

        return {
            "success" : True,
            "message": "Project Created Successfully!"
        }