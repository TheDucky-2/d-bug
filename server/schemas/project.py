from pydantic import BaseModel
from .user import UserResponse
from enum import Enum

from constants.enums import ProjectStatus

class ProjectCreate(BaseModel):
    project_name: str
    project_category:str
    description: str|None = None


class ProjectResponse(ProjectCreate):
    project_status: ProjectStatus = ProjectStatus.CREATED 
    project_owner: str
    organization_id: str | None
    project_id: int
    project_category:str
    project_name: str

    



    


    
