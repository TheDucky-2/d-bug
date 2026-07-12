from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from sqlalchemy.orm import Session
from config.db import get_db
from auth.auth import get_current_user
from utils.image_upload import upload_image
from models.Organization import Organization
from models.User import User
from typing import List
from schemas.organization import OrganizationResponse
from validators.user import validate_user


org_router = APIRouter(prefix="/organizations",tags=["organizations"], dependencies=[Depends(get_current_user)])

@org_router.post("/", response_model=OrganizationResponse)
def create_organization(organization_name:str= Form(...), 
                        organization_logo: UploadFile | None = File(None),
                        user_id = Depends(get_current_user),
                    db:Session = Depends(get_db)):
    """Function to create organization with organization name and logo image"""

    # Validating user
    user = validate_user(user_id)
    

    organization_logo_url = None

    if organization_logo is not None:
    
        organization_logo_url = upload_image(organization_logo) 

        if not organization_logo_url:
            raise HTTPException(status_code=500, detail="Unable to upload image at the moment")
    

    organization = Organization(organization_name = organization_name,
                                 organization_logo_url=organization_logo_url,
                                 organization_owner = user_id)

    db.add(organization)
    db.flush()

    # adding user to org members list
    organization.organization_members.append(user.full_name)

    db.commit()

    return {
        "organization_id": organization.organization_id,
        "organization_logo_url": organization.organization_logo_url,
        "organization_name": organization.organization_name,
        "organization_owner": organization.organization_owner,
        "organization_status": organization.organization_status,
        "organization_members": organization.organization_members,
        "created_at": organization.created_at
        }

@org_router.get("/", response_model=List[OrganizationResponse])
def get_all_organizations(user_id:int = Depends(get_current_user), db:Session = Depends(get_db)):

    # Validating user
    user = validate_user(user_id)
    
    org_list = db.query(Organization).filter(Organization.organization_owner == user.id).all()

    if org_list is None:
        raise HTTPException(status_code=404, detail= "No organization found associated with this user")

    return org_list

@org_router.get("/organizations/me", response_model=OrganizationResponse)
def get_current_organization(user_id: int = Depends(get_current_user), db:Session = Depends(get_db)):

    # Validating user
    user = validate_user(user_id)

    current_org = db.query(Organization).filter(Organization.organization_owner == user.id).first()

    if not current_org:
        raise HTTPException(status_code = 404, detail="Organization not found!")
    
    return {
        "organization_logo_url": current_org.organization_logo_url,
        "organization_name": current_org.organization_name,
        "organization_owner": current_org.organization_owner,
        "organization_status": current_org.organization_status,
        "organization_members": current_org.organization_members,
        ## to add project
    }








@org_router.get("/{organization_id}", response_model=OrganizationResponse)
def get_organization_by_id(organization_id: int, user_id:int = Depends(get_current_user) , db: Session = Depends(get_db)):

    # Validating user
    user = db.query(User).filter(User.id == user_id).first()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    # ensuring that current user is the owner of organization id and the requested organization

    org = db.query(Organization).filter(
        Organization.organization_owner == user.id, 
        Organization.organization_id == organization_id
        ).first()

    if org is None:
        raise HTTPException(status_code = 404, detail = "Organization does not exist or you may not have access to this Organization.")

    return org

@org_router.delete("/{organization_id}")
def delete_organization(organization_id: int, db:Session = Depends(get_db)):
    return

@org_router.put("/{organization_id}")
def update_organization(organization_id: int, db:Session = Depends(get_db)):
    return 

@org_router.post("/{organization_id}/projects")
def get_projects_under_organization(organization_id: int, db:Session = Depends(get_db)):
    return 

@org_router.get("/{organization_id}/projects/{project_id}")
def get_project_under_organization_by_id(organization_id: int , project_id: int, db: Session = Depends(get_db)):
    return 

@org_router.put("/{organization_id}/projects/{project_id}")
def update_project_under_organization_by_id(organization_id: int , project_id: int, db: Session = Depends(get_db)):
    return 

@org_router.delete("/{organization_id}/projects/{project_id}")
def delete_project_under_organization_by_id(organization_id: int , project_id: int, db: Session = Depends(get_db)):
    return 

@org_router.post("/{organization_id}/members")
def add_new_organization_member(organization_id: int, db:Session = Depends(get_db)):
    return 

@org_router.get("/{organization_id}/members")
def get_organization_members(db:Session = Depends(get_db)):
    return 

@org_router.get("/{organization_id}/members/{member_id}")
def get_organization_member_by_id(organization_id: int, member_id: int, db:Session = Depends(get_db)):
    return 

@org_router.delete("/{organization_id}/members/{member_id}")
def delete_organization_member_by_id(organization_id: int, member_id: int, db:Session = Depends(get_db)):
    return 
