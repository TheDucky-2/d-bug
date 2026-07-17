from sqlalchemy.orm import Mapped, mapped_column, relationship
from config.db import Base
from models.Role import Role
from .RolePermission import role_permissions
from typing import List

class Permission(Base):
    __tablename__ = "permissions"

    permission_id:Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    permission: Mapped[str] = mapped_column(nullable=False)
    roles: Mapped[List["Role"]] = relationship(secondary=role_permissions, back_populates="permissions")


