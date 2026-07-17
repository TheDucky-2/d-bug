import resend
from models import Role, Invitation, Organization, User
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError 
from fastapi import HTTPException
import os
from datetime import datetime, timedelta, timezone
from dotenv import load_dotenv
load_dotenv() 

BASE_URL = os.environ["FRONTEND_URL"]
RESEND_API_KEY = os.environ["RESEND_API_KEY"]

class EmailService:

    def __init__(self):
        pass

    @staticmethod
    def create_invite_token():
        import secrets

        invite_token = secrets.token_urlsafe(32)

        return invite_token 
    
    @staticmethod
    def generate_invite_url(invite_token:str):

        invite_url = f"{BASE_URL}/invite/{invite_token}"

        return invite_url
    
    @staticmethod
    def hash_invite_token(invite_token):
        import pwdlib

        hash_token = pwdlib.PasswordHash.recommended()

        hashed_token = hash_token.hash(invite_token)

        return hashed_token

    def send_invitation(self, user:User, 
                        organization:Organization, 
                        to_email:str, 
                        role:str, 
                        db:Session, 
                        optional_comments: None | str = None):

        # generate random invite token

        invite_token = EmailService.create_invite_token()
        invite_url = EmailService.generate_invite_url(invite_token=invite_token)

        # hashing invite token
        hashed_token = EmailService.hash_invite_token(invite_token=invite_token)
        expires_at = datetime.now(timezone.utc) + timedelta(days=7)

        roles = db.query(Role).all()
        print("Database roles:", [r.role for r in roles])

        role_ = db.query(Role).filter(Role.role == role).first()
        print(role)

        print("Received role:", repr(role))
        print("Query result:", role_)
        print("All roles:", [r.role for r in db.query(Role).all()])

        if role_ is None:
            raise HTTPException(status_code=404, detail="Unable to find role")
        
        # create an invitation
        invite = Invitation(
            organization_id = organization.organization_id,
            email = to_email,
            role = role_,
            invite_token = hashed_token,
            expires_at = expires_at,
            created_by = user.user_id,
            role_id = role_.role_id,
            optional_comments=optional_comments
        )

        # Store in database

        db.add(invite)
        db.flush()

        try:
            db.commit()
        
        except SQLAlchemyError:

            db.rollback()
            raise HTTPException(status_code=500, detail="Failed to create invitation")

        # Send email
        r = resend.Emails.send({
            "from":  "onboarding@resend.dev",
            "to": to_email,
            "subject": f"You've been invited to join {organization.organization_name}",
            "html": f"""
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
                <h2>You're invited! 🎉</h2>

                <p>
                    You have been invited to join 
                    <strong>{organization.organization_name}</strong>.
                </p>

                <p>
                    Your assigned role will be:
                    <strong>{role}</strong>
                </p>

                <p>
                    Click the button below to accept your invitation:
                </p>

                <p>
                    <a href="{invite_url}"
                    style="
                            display: inline-block;
                            padding: 12px 24px;
                            background-color: #2563eb;
                            color: white;
                            text-decoration: none;
                            border-radius: 6px;
                    ">
                        Accept Invitation
                    </a>
                </p>

                <p>
                    Or copy and paste this link into your browser:
                </p>

                <p>
                    {invite_url}
                </p>

                <p>
                    This invitation expires on:
                    <strong>{invite.expires_at}</strong>
                </p>

                <hr />

                <p style="color: #666; font-size: 12px;">
                    If you were not expecting this invitation, you can safely ignore this email.
                </p>
            </div>
            """
        })
        return {
            "success": True,
            "message": "Invite Sent Successfully!"
        }


        
