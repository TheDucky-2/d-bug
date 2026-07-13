from pydantic import BaseModel, EmailStr
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
    organization_id: str | None = None
    created_at: datetime
    

    

