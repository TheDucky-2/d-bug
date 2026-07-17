from .permissions import ROLE_PERMISSIONS
from sqlalchemy.orm import Session
from models.Permission import Permission
from .roles import MEMBER_ROLES
from models import Role
from models.RolePermission import role_permissions


def insert_permissions(db:Session):

    """Function for inserting roles and permissions"""

    existing_roles =  {role[0] for role in  db.query(Role.role).all()}

    for _role in MEMBER_ROLES:
        if _role not in existing_roles:

            role = Role(
                role = _role
            )

            db.add(role)
            db.flush()

    existing_permissions = {perm[0] for perm in db.query(Permission.permission).all()}

    for role, permissions in ROLE_PERMISSIONS.items():
        for permission in permissions:
            if permission not in existing_permissions:
                new_permission = Permission(
                    permission = permission
                )

                db.add(new_permission)
                existing_permissions.add(permission)
                db.flush()

    for role, permissions in ROLE_PERMISSIONS.items():

        _role = db.query(Role).filter(Role.role == role).first()

        for permission in permissions:
            _permission = db.query(Permission).filter(Permission.permission == permission).first()
            
            if _permission not in _role.permissions:
                _role.permissions.append(_permission)



    db.commit()


            

