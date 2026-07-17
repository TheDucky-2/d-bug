from pydantic import BaseModel
from constants.enums import MemberRole
from datetime import datetime
from pydantic import EmailStr

class MemberCreate(BaseModel):
    email:EmailStr
    password: str
    role: MemberRole


class MemberResponse(BaseModel):

    member_id: int
    organization_id: int
    role: MemberRole
    is_active: bool

    model_config = {
        "from_attributes": True
    }

class MemberUpdate(BaseModel):

    member_name: str
    role: MemberRole
    is_active: bool



