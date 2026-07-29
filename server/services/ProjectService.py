from sqlalchemy.orm import Session
from fastapi import Form, HTTPException
from models.Project import Project
from schemas.project import ProjectResponse
from services.Authenticator import Authenticator
from models.Organization import Organization
from models.User import User

class ProjectService:

    def __init__(self):
        pass

    def create_project(self,  
                       db:Session,
                       organization:Organization,
                       user: User,
                       name:str, 
                       category:str, 
                       description:str | None =None, 
                       ):
        """Function to create a new project manually."""
        try:
            existing_project = db.query(Project).filter(
                Project.project_name == name,
                Project.project_category == category,
                Project.organization_id == organization.organization_id
            ).first()

            if existing_project:
                raise HTTPException(status_code = 409, detail="Project already exists!")
            
            project = Project(
                project_name=name,
                project_category=category,
                description= description,
                created_by = user.user_id,
                organization= organization
            )

            db.add(project)
            db.flush()

            db.commit()

        except HTTPException:
            raise

        except Exception:
            db.rollback()
            raise

        return {
            "success" : True,
            "message": "Project Created Successfully!"
        }

    def get_projects(
            self,
            db:Session,
            organization: Organization
            ):

        """Function to fetch all projects."""

        try:
            projects = db.query(Project).filter(Project.organization_id == organization.organization_id).all()

            if not projects:
                raise HTTPException(status_code=404, detail = "No projects found.")

        except HTTPException:
            raise 

        except Exception:
            raise 

        return projects

