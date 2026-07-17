from pydantic import BaseModel, EmailStr, ConfigDict
from constants.enums import UserType, Subscription, MemberRole
from datetime import datetime

class UserCreate(BaseModel):

    full_name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str
    

class UserResponse(BaseModel):
    user_id: int
    email: EmailStr
    full_name: str
    user_type: UserType
    subscription: Subscription
    organization_id: int | None = None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
    

    

