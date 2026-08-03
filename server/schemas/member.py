from pydantic import BaseModel
from .role import RoleResponse
from datetime import datetime
from pydantic import EmailStr
from .user import UserResponse

class MemberCreate(BaseModel):
    email:EmailStr
    password: str
    role: RoleResponse


class MemberResponse(BaseModel):

    member_id: int
    organization_id: int
    role: RoleResponse
    is_active: bool
    user: UserResponse

    model_config = {
        "from_attributes": True
    }

class MemberUpdate(BaseModel):

    member_name: str
    role: RoleResponse
    is_active: bool



