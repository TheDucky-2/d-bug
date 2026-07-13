from pydantic import BaseModel, EmailStr
from constants.enums import Subscription, MemberRole
from datetime import datetime

class MemberCreate(BaseModel):

    full_name: str
    email: EmailStr
    password: str

class MemberLogin(BaseModel):
    email: EmailStr
    password: str
    

class MemberResponse(BaseModel):
    member_id: int
    email: EmailStr
    role: MemberRole
    organization_id: str | None = None

    

    

