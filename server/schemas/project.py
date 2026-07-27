from pydantic import BaseModel
from .user import UserResponse
from enum import Enum

from constants.enums import ProjectStatus

class ProjectCreate(BaseModel):
    name: str
    category:str
    description: str|None = None


class ProjectResponse(ProjectCreate):
    status: ProjectStatus = ProjectStatus.CREATED 
    created_by: int
    organization_id: int 
    project_id: int
    category:str
    name: str
    description:str|None = None

    



    


    
