from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy import ForeignKey, DateTime, func, String
from constants.enums import OrganizationStatus
from schemas.project import ProjectResponse
from typing import List
from datetime import datetime
from config.db import Base
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .Project import Project

class Organization(Base):

    __tablename__ = "organizations"

    organization_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    organization_name: Mapped[str] = mapped_column()
    organization_logo_url: Mapped[str | None] = mapped_column(nullable=True)
    organization_members: Mapped[List[str]] = mapped_column(ARRAY(String))
    organization_status: Mapped[OrganizationStatus] = mapped_column(default=OrganizationStatus.ACTIVE)
    organization_owner: Mapped[int | None] = mapped_column(ForeignKey("users.id"), nullable=True)
    organization_projects: Mapped[List["Project"]]  = relationship(back_populates="organization")


    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())
