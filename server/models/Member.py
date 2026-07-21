from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, DateTime, func
from datetime import datetime
from config.db import Base
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .Role import Role
    from .User import User


class Member(Base):

    __tablename__ = "members"

    member_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    role_id : Mapped[int] = mapped_column(ForeignKey("roles.role_id"))
    user_id: Mapped[int] = mapped_column(ForeignKey("users.user_id"))
    organization_id : Mapped[int] = mapped_column(ForeignKey("organizations.organization_id"))
    user: Mapped["User"] = relationship("User", back_populates="membership")
    organization = relationship("Organization", back_populates="members")
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())
    role:Mapped["Role"] = relationship(back_populates="members")