from enums import OrganizationStatus
from user import UserResponse
from pydantic import BaseModel
from typing import List
from datetime import datetime

class OrganizationCreate(BaseModel):

    organization_name: str

class OrganizationResponse(BaseModel):
    organization_id: int
    organization_status: OrganizationStatus
    organization_owner: int | None = None
    created_at: datetime
    organization_logo_url: str | None = None


