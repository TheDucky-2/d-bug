from .permissions import ROLE_PERMISSIONS
from .roles import MEMBER_ROLES
from config.db import get_db
from sqlalchemy.orm import Session
from models.Permission import Permission
from models.Role import Role
from models.RolePermissions import role_permissions
from sqlalchemy import select

def insert_roles_and_permissions(db: Session):
    permissions = {}
    roles = {}

    for member_role, permission_list in ROLE_PERMISSIONS.items():
        

        if member_role not in roles:
            role = Role(
                role = member_role
            )
            db.add(role)
            db.flush()
            roles[member_role] = role

            for permission in permission_list:

                if permission not in permissions:
                    perm = Permission(
                        permission = permission
                    )

                    db.add(perm)
                    db.flush()
                    permissions[permission] = perm

                    role.permissions.append(perm)

    db.commit()

        







    


    

