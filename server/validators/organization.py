from services.OrganizationService import OrganizationService
from fastapi import Depends, HTTPException
from validators.user import validate_user
from sqlalchemy.orm import Session
from models import Organization
from config.db import get_db


def validate_organization(db:Session = Depends(get_db), user= Depends(validate_user)):
    
    organization = OrganizationService.get_current_organization(db=db, user=user)
    
    if not organization:
        raise HTTPException(status_code=404, detail = "Organization does not exist")

    return organization
