import dramatiq
from dramatiq.brokers.redis import RedisBroker
from config.db import SessionLocal
from models.Invitation import Invitation
from models.Organization import Organization
from logger.logger import create_logger
import resend
from fastapi import HTTPException
import os

RESEND_API_KEY = os.environ["RESEND_API_KEY"]
broker = RedisBroker()
dramatiq.set_broker(broker)

logger = create_logger(__name__.split(".")[1])

@dramatiq.actor
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
        r = resend.Emails.send({
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