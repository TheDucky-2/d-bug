from fastapi import APIRouter, Depends, Form, UploadFile, File, Path
from sqlalchemy.orm import Session
from config.db import get_db
from schemas.organization import OrganizationResponse
from validators.user import validate_user
from validators.organization import validate_organization
from constants.enums import OrganizationStatus
from services.OrganizationService import OrganizationService

org_router = APIRouter(prefix="/organizations",tags=["organizations"])

####### USERTYPE = "user" and MEMBER ROLE = "owner" only ################

# require permission -> (organization:self:create)
@org_router.post("/", response_model=OrganizationResponse, status_code=201)
def create_organization(
    db:Session = Depends(get_db),
    organization_name:str=  Form(...),
    organization_logo: UploadFile | None = File(None),
    user = Depends(validate_user),
    organization_service = Depends(OrganizationService)):
    """Function to create organization with organization name and logo image"""
    
    return organization_service.create_organization(
        db=db,
        organization_name=organization_name,
        organization_logo=organization_logo,
        user=user,
    )

####### USERTYPE = "user" and MEMBER ROLE = "owner" / "admin" ################

# require permission -> (organization:self:read) -> admin, owner
@org_router.get("/me", response_model=OrganizationResponse, status_code=200)
def get_current_organization(
                        db:Session = Depends(get_db),
                        user = Depends(validate_user),
                        organization_service = Depends(OrganizationService)):
    """Function to create organization with organization name and logo image"""
    
    return organization_service.get_current_organization(
        db=db,
        user=user,
    )

# require permission -> (organization:self:delete) -> Owner
@org_router.delete("/me", status_code=204)
def delete_current_organization(
    db:Session = Depends(get_db), 
    user = Depends(validate_user),
    organization_service = Depends(OrganizationService)):
    return organization_service.delete_current_organization(
            user = user, 
            db=db)

@org_router.patch("/me", status_code=200)
def update_current_organization(
            organization_name:str = Form(...),
            organization_status: OrganizationStatus | None = Form(None),
            organization_logo_url: UploadFile = File(None),
            db:Session = Depends(get_db),
            user = Depends(validate_user),
            organization_service = Depends(OrganizationService)
        ):
    
    return organization_service.update_current_organization(
        db= db,
        user=user,
        organization_name = organization_name,
        organization_logo_url=organization_logo_url,
        organization_status = organization_status
    )


############ USERTYPE = SUPER_ADMIN  only ##################

# require permission -> (organization:any:read) -> Super admin
@org_router.get("/{organization_id}", status_code=200)
def get_organization_by_id(
    organization_id: int = Path(...,   
    title="Organization identifier",
    description="The database ID of the organization"),
    db:Session = Depends(get_db),
    organization_service = Depends(OrganizationService)):
        
    return organization_service.get_organization_by_id(
        organization_id = organization_id,
        db=db,
    )

# require permission -> (organization:any:read) -> Super admin
@org_router.get("/", status_code=200)
def get_all_organizations(db:Session = Depends(get_db), organization_service = Depends(OrganizationService)):

    return organization_service.get_all_organizations(db)

# require permission -> (organization:any:delete) -> Super_admin
@org_router.delete("/{organization_id}", status_code=204)
def delete_organization_by_id(
    organization_id: int = Path(...,   
    title="Organization identifier",
    description="The database ID of the organization"),
    db:Session = Depends(get_db), 
    organization_service = Depends(OrganizationService)):

    return organization_service.delete_organization_by_id(organization_id=organization_id, db=db)

