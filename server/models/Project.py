from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase
from sqlalchemy import ForeignKey, DateTime, func
from schemas.enums import ProjectStatus
from schemas.user import UserResponse
from datetime import datetime
from config.db import Base

class Project(Base):

    __tablename__ = "projects"

    project_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    project_name: Mapped[str] = mapped_column()
    description: Mapped[str] = mapped_column()
    github_url: Mapped[str|None] = mapped_column(nullable=True)
    organization_id: Mapped[int | None] = mapped_column(ForeignKey("organizations.organization_id"), nullable=True)
    project_status: Mapped[ProjectStatus]= mapped_column()
    project_owner: Mapped[UserResponse] = mapped_column(ForeignKey("users.id"))
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())


    