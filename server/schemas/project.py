from pydantic import BaseModel
from .user import UserResponse
from enum import Enum

from constants.enums import ProjectStatus

class ProjectCreate(BaseModel):

    project_id: int
    project_name: str
    description: str 
    github_url: str | None

class ProjectResponse(ProjectCreate):
    project_status: ProjectStatus = ProjectStatus.CREATED 
    project_owner:UserResponse
    organization_id: str | None
    



    


    
