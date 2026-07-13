from pydantic import BaseModel, EmailStr, ConfigDict
from .enums import Subscription, Role
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
    role: Role
    subscription: Subscription
    organization_id: int | None = None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
    

    

