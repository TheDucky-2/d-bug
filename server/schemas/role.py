from pydantic import BaseModel
from constants.enums import MemberRole

class RoleCreate(BaseModel):
    role: MemberRole

class RoleResponse(RoleCreate):
    role_id: int

