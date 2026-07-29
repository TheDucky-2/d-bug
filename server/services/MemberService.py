from models.Member import Member
from models.Organization import Organization
from sqlalchemy.orm import Session
from fastapi import HTTPException

class MemberService:

    def __init__(self):
        pass

    # current user, current organization
    def get_members(
            self, 
            db: Session,
            organization:Organization):

        try:
            members = db.query(Member).filter(Member.organization_id == organization.organization_id).all()

            if not members:
                raise HTTPException(status_code=404, detail="No members found.")

        except HTTPException:
            raise

        except Exception:
            raise

        return members

    
        




        

        

        
