from ..db import Base, SessionLocal
from constants import PERMISSIONS, ROLES
from models.Permission import Permission
from models.Role import Role

db = SessionLocal()

def insert_roles_and_permissions(db):

    for permission in PERMISSIONS:
        
        permission_exists = db.query(Permission).filter(Permission.permission == permission).first()

        if not permission_exists:
            db.add(Permission(permission=permission))

    for role in ROLES:
        role_exists = db.query(Role).filter(Role.role == role).first()
        
        
        if not role_exists:
            db.add(Role(role=role))  

    db.commit()
