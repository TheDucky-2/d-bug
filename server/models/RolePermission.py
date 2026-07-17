from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import ForeignKey, Table, Column
from config.db import Base

role_permissions = Table(
    "role_permissions",
    Base.metadata,
    Column("role_id", ForeignKey("roles.role_id"), primary_key=True),
    Column("permission_id", ForeignKey("permissions.permission_id"), primary_key=True),
)
    


    