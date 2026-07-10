from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from sqlalchemy.orm import Session
from config.db import get_db
from auth.auth import get_current_user
from utils.image_upload import upload_image
from models.Organization import Organization
from models.User import User
from typing import List


org_router = APIRouter(prefix="/organizations",tags=["organizations"], dependencies=[Depends(get_current_user)])

@org_router.post("/")
def create_organization(organization_name:str= Form(...), 
                              organization_logo: UploadFile | None = File(None),
                              user_id = Depends(get_current_user),
                            db:Session = Depends(get_db)):
    """Function to create organization with organization name and logo image"""

    # Validating user
    user = db.query(User).filter(User.id == user_id).first()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    

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

    db.commit()

    return {
        "data":{
            
            "organization_logo_url": organization_logo_url,
            "organization_name": organization_name

        },
        "message": "Organization created successfully!"}

@org_router.get("/")
def get_all_organizations(user_id:int = Depends(get_current_user), db:Session = Depends(get_db)):

    # Validating user
    user = db.query(User).filter(User.id == user_id).first()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    org_list = db.query(Organization).filter(Organization.organization_owner == user.id).all()

    return {
        "success": True,
        "message": "Fetched all organizations successfully!",
        "data": org_list
    }


@org_router.get("/{organization_id}")
def get_organization_by_id(organization_id: int , db: Session = Depends(get_db)):
    return 

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
