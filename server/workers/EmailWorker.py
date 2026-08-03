import dramatiq
from dramatiq.brokers.redis import RedisBroker
from config.db import SessionLocal
from models.Invitation import Invitation
from models.Organization import Organization
from models.User import User
from models.Role import Role
from models.Permission import Permission
from logger.logger import create_logger
import resend
from fastapi import HTTPException
import os

RESEND_API_KEY = os.environ["RESEND_API_KEY"]
broker = RedisBroker()
dramatiq.set_broker(broker)

logger = create_logger(__name__.split(".")[1])

@dramatiq.actor(queue_name="invites")
def send_invitation_email(invitation_id: int, invitation_url:str):

    db = SessionLocal()

    try:
        logger.info(f"Sending an invite to {invitation_id}.")

        logger.info("Fetching invitation details from database...")
        invite = db.query(Invitation).filter(Invitation.invitation_id == invitation_id).first()

        if invite is None:
            raise HTTPException(status_code=404, detail="Invite not found.")
        
        logger.info("Fetching organization details from the database...")
        organization_name = db.query(Organization.organization_name).filter(Organization.organization_id == invite.organization_id).first()
        
        print(type(organization_name))
        print("ORGANIZATION_NAME",organization_name)

        if organization_name is None:
            raise HTTPException(status_code = 404, detail="Organization with this name does not exist.")
        
        logger.info({"organization_name": organization_name, "to_email": invite.email})
        logger.info("Sending email...")

        # Send email
        resend.Emails.send({
            "from":  "onboarding@resend.dev",
            "to": invite.email,
            "subject": f"You've been invited to join {organization_name}",
            "html": f"""
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
                <RESEND_API_KEY = os.environ["RESEND_API_KEY"]h2>You're invited! 🎉</h2>

                <p>
                    You have been invited to join 
                    <strong>{organization_name}</strong>.
                </p>

                <p>
                    Your assigned role will be:
                    <strong>{invite.role.role}</strong>
                </p>

                <p>
                    Click the button below to accept your invitation:
                </p>

                <p>
                    <a href="{invitation_url}"
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
                    {invitation_url}
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

        logger.info("Email sent successfully!")

    except HTTPException:
        
        raise

    except Exception as error:
        raise error
    
    finally:
        db.close()

@dramatiq.actor(queue_name="password_resets")
def send_password_reset_email(
        user_id: int,
        reset_url:str):

    db = SessionLocal()

    try:
        user = db.query(User).filter(User.user_id == user_id).first()

        if not user:
            raise HTTPException(status_code=404, detail="User not found") 

        resend.Emails.send({
            "from": "onboarding@resend.dev",
            "to": user.email,
            "subject": "Your password reset link",
            "html": f"""
            <!DOCTYPE html>
            <html>
            <body style="margin:0;padding:40px;background:#f6f9fc;font-family:Arial,sans-serif;">

            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                <td align="center">

                    <table role="presentation" width="600" cellspacing="0" cellpadding="0"
                    style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:40px;">

                    <tr>
                        <td>
                        <h2 style="margin:0 0 20px;color:#111827;">
                            Reset your password
                        </h2>

                        <p style="font-size:16px;color:#4b5563;line-height:24px;">
                            We received a request to reset your password.
                        </p>

                        <p style="text-align:center;margin:35px 0;">
                            <a href="{reset_url}"
                            style="
                                background:#111827;
                                color:#ffffff;
                                text-decoration:none;
                                padding:14px 28px;
                                border-radius:8px;
                                display:inline-block;
                                font-weight:bold;
                            ">
                            Reset Password
                            </a>
                        </p>

                        <p style="font-size:14px;color:#6b7280;">
                            If the button doesn't work, copy and paste this link:
                        </p>

                        <p>
                            <a href="{reset_url}">
                            {reset_url}
                            </a>
                        </p>

                        <p style="font-size:13px;color:#9ca3af;">
                            If you didn't request this, you can safely ignore this email.
                        </p>
                        </td>
                    </tr>

                    </table>

                </td>
                </tr>
            </table>

            </body>
            </html>
            """
            })

        logger.info("Password reset email sent successfully!")
        
    except Exception:
        raise
    
    finally:
        db.close()    
   
    