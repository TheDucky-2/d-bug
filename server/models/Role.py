from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, DateTime, func
from constants.enums import MemberRole
from config.db import Base
from typing import TYPE_CHECKING, List
from .RolePermission import role_permissions

if TYPE_CHECKING:
    from .Member import Member
    from .Permission import Permission


class Role(Base):

    __tablename__ = "roles"

    role_id: Mapped[int] =  mapped_column(primary_key=True, autoincrement=True, index=True)
    role : Mapped[str] = mapped_column(default=MemberRole.DEVELOPER.value, nullable=False)
    members: Mapped[List["Member"]] = relationship("Member",back_populates="role")
    permissions: Mapped[List["Permission"]] = relationship(secondary=role_permissions, back_populates="roles")
