from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy import ForeignKey, DateTime, func, String
from constants.enums import OrganizationStatus
from typing import List
from datetime import datetime
from config.db import Base
from .Role import Role
from .User import User

class Member(Base):

    __tablename__ = "organization_members"

    name : Mapped[str] = mapped_column(ForeignKey="users.full_name")
    organization_id : Mapped[int] = mapped_column(ForeignKey = "organization.organization_id", nullable=False)
    member_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    role_id: Mapped[int] = mapped_column(ForeignKey="roles.role_id", nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey = "users.user_id", nullable=False)

    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())
