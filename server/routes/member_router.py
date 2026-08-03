from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.db import get_db
from services.MemberService import MemberService
from validators.organization import validate_organization
from schemas.member import MemberResponse
from typing import List
from services.AuthorizationService import AuthorizationService


member_router = APIRouter(prefix="/members", tags=["members"])


@member_router.get("/", response_model=List[MemberResponse])
def get_members(
    db:Session = Depends(get_db),
    organization = Depends(validate_organization),
    member_service = Depends(MemberService),
    _ = Depends(AuthorizationService.require_permission("member:any:read"))):

    return member_service.get_members(
        db = db,
        organization = organization
    )

@member_router.delete("/{member_id}", status_code=204)
def delete_member(
    member_id: int,
    db:Session = Depends(get_db),
    organization = Depends(validate_organization),
    member_service = Depends(MemberService),
    _ = Depends(AuthorizationService.require_permission("member:any:remove"))
    ):

    return member_service.delete_member(
        member_id = member_id,
        db = db,
        organization= organization)
