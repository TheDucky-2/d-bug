from fastapi import APIRouter, Depends, Body
from sqlalchemy.orm import Session
from config.db import get_db
from services.Authenticator import Authenticator
from services.EmailService import EmailService
from services.Authenticator import Authenticator
from services.AuthorizationService import AuthorizationService
from validators.organization import validate_organization


email_router = APIRouter(prefix="/invite", tags=["invites"])

@email_router.post("/", status_code=201)
def send_invite(
        to_email:str = Body(...),
        role: str = Body(...),
        optional_comments: str | None = Body(None),
        user = Depends(Authenticator.get_current_user),
        db:Session = Depends(get_db),
        organization = Depends(validate_organization),
        email_service:EmailService = Depends(EmailService),
        _ = Depends(AuthorizationService.require_permission("invitation:any:create"))
    ):

    return email_service.create_invitation(
        user = user,
        organization = organization,
        to_email = to_email, 
        role = role, 
        db = db,
        optional_comments=optional_comments
    )