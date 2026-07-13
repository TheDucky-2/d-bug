from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from sqlalchemy.orm import Session
from config.db import get_db
from services.Authenticator import Authenticator
from utils.image_upload import upload_image
from models.Organization import Organization
from models.User import User
from typing import List
from schemas.organization import OrganizationResponse
from validators.user import validate_user


org_router = APIRouter(prefix="/organizations",tags=["organizations"])

@org_router.post("/", response_model=OrganizationResponse)
def create_organization(organization_name:str= Form(...), 
                        organization_logo: UploadFile | None = File(None),
                        user = Depends(validate_user),
                    db:Session = Depends(get_db)):
    """Function to create organization with organization name and logo image"""

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

    db.commit()

    db.refresh(organization)

    return {
        "organization_id": organization.organization_id,
        "organization_logo_url": organization.organization_logo_url,
        "organization_name": organization.organization_name,
        "organization_owner": organization.organization_owner,
        "organization_status": organization.organization_status,
        "organization_members": organization.organization_members,
        "created_at": organization.created_at
        }
