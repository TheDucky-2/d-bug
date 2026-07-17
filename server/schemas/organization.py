from constants.enums import OrganizationStatus
from .user import UserResponse
from pydantic import BaseModel
from typing import List
from datetime import datetime
from pydantic import ConfigDict
from .project import ProjectResponse
from .member import MemberResponse

class OrganizationCreate(BaseModel):

    organization_name: str


class OrganizationResponse(OrganizationCreate):
    organization_id: int
    organization_name: str
    organization_status: OrganizationStatus
    organization_owner: int | None = None
    created_at: datetime
    organization_logo_url: str | None = None
    organization_projects: List[ProjectResponse] | None = None

    model_config = ConfigDict(from_attributes=True)

class OrganizationUpdate(BaseModel):
    organization_name: str | None = None
    organization_logo_url: str | None = None
    organization_status: OrganizationStatus | None = None