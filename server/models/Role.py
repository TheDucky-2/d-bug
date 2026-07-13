from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from config.db import Base
from typing import TYPE_CHECKING, List
from constants.enums import MemberRole

from .RolePermissions import role_permissions

if TYPE_CHECKING:
    from .Permission import Permission


class Role(Base):
    __tablename__ = "roles"

    role_id: Mapped[int] = mapped_column(primary_key=True,autoincrement=True)
    role: Mapped[MemberRole] = mapped_column(unique=True, nullable=False)
    permissions: Mapped[List["Permission"]] = relationship(secondary = "role_permissions", back_populates="roles")
