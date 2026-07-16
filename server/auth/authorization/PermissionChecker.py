from models.RolePermissions import role_permissions
from sqlalchemy.orm import Session
from models.Role import Role


class PermissionChecker:

    def __init__(self):
        pass

    def get_role_permissions(self, role_id:int, db:Session):

        permissions = db.query(role_permissions).filter(role_permissions.c.role_id == role_id).all()

        return permissions





    

