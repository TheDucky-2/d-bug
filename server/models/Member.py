from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy import ForeignKey, DateTime, func, String
from constants.enums import OrganizationStatus
from typing import List, TYPE_CHECKING
from datetime import datetime
from config.db import Base


if TYPE_CHECKING:
    from .Role import Role

class Member(Base):

    __tablename__ = "members"

    organization_id : Mapped[int] = mapped_column(ForeignKey("organizations.organization_id"))
    member_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    role_id : Mapped[int] = mapped_column(ForeignKey("roles.role_id"))
    user_id: Mapped[int] = mapped_column(ForeignKey("users.user_id"))
    role: Mapped["Role"] = relationship("Role",back_populates="members")
    user = relationship("User", back_populates="member")
    organization = relationship("Organization", back_populates="organization_members")
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())