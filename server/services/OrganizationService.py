
from fastapi import Request, Response, Depends, HTTPException,Form, UploadFile, File
from sqlalchemy.orm import Session
from schemas.organization import OrganizationResponse
from utils.image_upload import upload_image
from validators.user import validate_user
from models.Organization import Organization
from services.Authenticator import Authenticator

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
        print(user.user_id)
        print(user.organization_id)

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

        return OrganizationResponse(
        organization_id = organization.organization_id,
        organization_name = organization.organization_name,
        organization_logo_url =  organization.organization_logo_url,
        organization_owner = organization.organization_owner,
        organization_status = organization.organization_status,
        organization_members = organization.organization_members,
        created_at = organization.created_at
        )
    