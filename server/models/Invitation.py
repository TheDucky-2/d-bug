from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import DateTime, ForeignKey
from constants.enums import InviteStatus
from datetime import datetime
from config.db import Base
from .Role import Role

class Invitation(Base):

    __tablename__ = "invitations"

    invitation_id : Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    organization_id : Mapped[int] = mapped_column(ForeignKey("organizations.organization_id"), nullable=False)
    invite_token: Mapped[str] = mapped_column(nullable=False, unique=True, index=True)
    role: Mapped["Role"] = relationship("Role")
    email: Mapped[str] = mapped_column(nullable=False)
    status: Mapped[InviteStatus] = mapped_column(default=InviteStatus.PENDING.value, nullable=False)
    expires_at: Mapped[datetime] = mapped_column(DateTime,nullable=False)
    created_by: Mapped[int] = mapped_column(ForeignKey("users.user_id"),nullable=False)
    role_id: Mapped[int] = mapped_column(ForeignKey("roles.role_id"), nullable=False)
    optional_comments : Mapped[str | None] = mapped_column(nullable=True)