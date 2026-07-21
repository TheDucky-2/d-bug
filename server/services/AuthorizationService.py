from sqlalchemy.orm import Session
from models.Role import Role
from models.Member import Member
from models.Permission import Permission
from models.RolePermission import role_permissions
from models.User import User
from fastapi import HTTPException, Depends
from config.redis import redis_client
from config.db import get_db
from services.Authenticator import Authenticator
import json

class AuthorizationService:

    def __init__(self):
        pass

    @staticmethod
    def get_role(db:Session, user:User):

        member = db.query(Member).filter(Member.user_id == user.user_id).first()

        if not member:
            raise HTTPException(status_code = 404, detail="Membership does not exist.")
        
        role = {
            "role_id" : member.role.role_id,
            "role": member.role.role
        }
        
        return role

    @staticmethod
    def get_role_permissions(db:Session, user:User):

        role = AuthorizationService.get_role(db=db, user = user)
        print("ROLE", role["role_id"])

        permissions = {perm[1] for perm in db.query(role_permissions).filter(role_permissions.c.role_id == role["role_id"]).all()}
        print(permissions)

        if not permissions:
            raise HTTPException(status_code=404, detail="Permissions not found")
        
        return permissions
    
    @staticmethod
    def require_permission(permission:str):
    
        def permission_checker(db:Session = Depends(get_db),  user = Depends(Authenticator.get_current_user)):
            print("permission checker called")
            permission_ = db.query(Permission).filter(Permission.permission == permission).first()

            if not permission_:
                raise HTTPException(status_code=404, detail="Permission not found")


            print("PERMISSION", permission_.permission_id)
            print(type(permission_.permission_id))

            permissions = AuthorizationService.get_role_permissions(db = db, user = user)
            print([(x) for x in permissions])
            print(permissions)

            if permission_.permission_id not in permissions:
                raise HTTPException(status_code=403, detail="Forbidden access")
            
        return permission_checker




    

  

        

