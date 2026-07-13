
from sqlalchemy.orm import Mapped, mapped_column, relationship
from config.db import Base
from typing import TYPE_CHECKING, List
from constants.permissions import PERMISSIONS
from .RolePermissions import role_permissions

if TYPE_CHECKING:
    from .Role import Role
    

class Permission(Base):
    __tablename__ = "permissions"

    permission_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    permission : Mapped[str] = mapped_column(unique=True,nullable=False)
    description: Mapped[str|None] = mapped_column(nullable=True)
    roles: Mapped[List["Role"]] = relationship(secondary="role_permissions", back_populates="permissions") 
    