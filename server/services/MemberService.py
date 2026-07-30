from models.Member import Member
from models.Organization import Organization
from sqlalchemy.orm import Session
from fastapi import HTTPException

class MemberService:

    def __init__(self):
        pass

    def add_member(
            self
            ):

        return 


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

    def delete_member(
            self,
            member_id: int,
            db:Session,
            organization: Organization):

        "Function to delete member by member_id"

        try: 
            member = db.query(Member).filter(
                Member.organization_id == organization.organization_id,
                Member.member_id == member_id).first()

            if not member:
                raise HTTPException(status_code=404, detail ="Unable to find the member!")

            db.delete(member)
            db.commit()

        except HTTPException:
            raise

        except Exception:
            db.rollback()
            raise

        return {"message": "Member deleted successfully!"}

        




        

        

        
