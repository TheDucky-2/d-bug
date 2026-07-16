from constants.enums import OrganizationStatus
from fastapi import Request, Response, Depends, HTTPException,Form, UploadFile, File
from sqlalchemy.orm import Session
from schemas.organization import OrganizationResponse, OrganizationUpdate
from utils.image_upload import upload_image
from validators.user import validate_user
from models import Organization, User
from logger.logger import create_logger

logger = create_logger(name = __name__.split(".")[1])

class OrganizationService:

    def __init__(self):
        pass

    def create_organization(self,
            db:Session,
            organization_name:str= Form(...), 
            organization_logo: UploadFile | None = File(None),
            user = Depends(validate_user),
            ):
        """Function to create organization with organization name and logo image"""

        if user.organization_id is not None:
            raise HTTPException(status_code=409, detail="User already belongs to an organization")

        organization_logo_url = None

        if organization_logo is not None:
        
            organization_logo_url = upload_image(organization_logo) 

            if not organization_logo_url:
                raise HTTPException(status_code=500, detail="Unable to upload image at the moment")
        

        organization = Organization(organization_name = organization_name,
                                    organization_logo_url=organization_logo_url,
                                    organization_owner = user.user_id,
                                    organization_members = [user.user_id])

        db.add(organization)
        db.flush()

        user.organization_id = organization.organization_id

        db.commit()

        db.refresh(organization)

        logger.info({
            "message": "New Organization Created",
            "data": {
                "organization_id" : organization.organization_id,
                "organization_name": organization.organization_name,
                "organization_owner" : organization.organization_owner
            }
        })

        return OrganizationResponse(
        organization_id = organization.organization_id,
        organization_name = organization.organization_name,
        organization_logo_url =  organization.organization_logo_url,
        organization_owner = organization.organization_owner,
        organization_status = organization.organization_status,
        organization_members = organization.organization_members,
        created_at = organization.created_at
        )
    
    @staticmethod
    def get_current_organization(
        db:Session,
        user = Depends(validate_user)
        ):

        """Function to fetch current organization"""

        if user.organization_id is None:
            raise HTTPException(status_code=404, detail="User does not belong to any organization.")

        current_organization = db.query(Organization).filter(
        Organization.organization_id == user.organization_id,
        Organization.organization_members.any(user.user_id)    # checking whether user is still a member of organization
        ).first()

        if not current_organization:
            raise HTTPException(status_code=404, detail = "Organization does not exist")

        return OrganizationResponse(
        organization_id = current_organization.organization_id,
        organization_name = current_organization.organization_name,
        organization_logo_url =  current_organization.organization_logo_url,
        organization_owner = current_organization.organization_owner,
        organization_status = current_organization.organization_status,
        organization_members = current_organization.organization_members,
        created_at = current_organization.created_at
        )
    
    def get_organization_by_id(self, db:Session, organization_id:int):

        """Function to fetch organization by id. Requires SUPER_ADMIN access"""

        organization = db.query(Organization).filter(Organization.organization_id == organization_id).first()

        if not organization:
            raise HTTPException(status_code=404, detail="Organization not found!")

        return OrganizationResponse(
        organization_id = organization.organization_id,
        organization_name = organization.organization_name,
        organization_logo_url =  organization.organization_logo_url,
        organization_owner = organization.organization_owner,
        organization_status = organization.organization_status,
        organization_members = organization.organization_members,
        created_at = organization.created_at
        )


    def get_all_organizations(self, db:Session):

        """Function to fetch all organizations. Requires SUPER_ADMIN access"""

        organizations = db.query(Organization).all()

        if not organizations:
            raise HTTPException(status_code=404, detail="No Organizations to view!")

        return organizations
    
    def delete_organization_by_id(self, db:Session, organization_id: int):

        """Function to delete organization by id. Requires SUPER_ADMIN access"""

        organization = db.query(Organization).filter(Organization.organization_id == organization_id).first()

        if not organization:
            raise HTTPException(status_code=404, detail = "Organization not found")
        
        users = db.query(User).filter(User.organization_id == organization.organization_id).all()
        
        if len(users) > 0:
            raise HTTPException(status_code=400, detail="Cannot delete organization with existing users")
        
        db.delete(organization)
        db.commit()

        return {
            "message": "Organization deleted successfully!"
        }
    
    def delete_current_organization(
            self,
            db:Session,
            user
            ):

        """Function to delete current organization. Requires OWNER access"""

        organization = self.get_current_organization(db=db, user = user)

        validated_organization = db.query(Organization).filter(Organization.organization_id == organization.organization_id).first()

        if not validated_organization:
            raise HTTPException(status_code=404, detail = "Organization not found")
        
        users = db.query(User).filter(User.organization_id == validated_organization.organization_id).all()
        
        if len(users) > 0:
            raise HTTPException(status_code=400, detail="Cannot delete organization with existing users")
        
        db.delete(validated_organization)
        db.commit()

        return {
            "message": "Organization deleted successfully!"
        }

    def update_current_organization(
            self,
            db:Session,
            user,
            organization_name:str = Form(...),
            organization_status: OrganizationStatus = Form(...),
            organization_logo_url = File(...),
        ):

        """Function to update current organization. Requires OWNER or ADMIN access"""

        current_organization = self.get_current_organization(db=db, user = user)

        validated_organization = db.query(Organization).filter(Organization.organization_id == current_organization.organization_id).first()

        if not validated_organization:
            raise HTTPException(status_code=404, detail = "Organization not found")
        
        validated_organization.organization_name = organization_name
        validated_organization.organization_status = organization_status
        validated_organization.organization_logo_url = organization_logo_url

        db.commit()

        return OrganizationUpdate(
            organization_name= validated_organization.organization_name,
            organization_logo_url= validated_organization.organization_logo_url,
            organization_status= validated_organization.organization_status,
        )

