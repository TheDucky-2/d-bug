from sqlalchemy import Table, Column, Integer, ForeignKey
from config.db import Base

# table connecting Role and Permissions as they have many to many relationship

role_permissions = Table(
    "role_permissions",
    Base.metadata,
    
    Column(
        "role_id",
        Integer,
        ForeignKey("roles.role_id"),
        primary_key=True
    ),

    Column(
        "permission_id",
        Integer,
        ForeignKey("permissions.permission_id"),
        primary_key=True
    )
)