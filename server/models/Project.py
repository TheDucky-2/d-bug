from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, DateTime, func
from constants.enums import ProjectStatus, BugSource
from datetime import datetime
from config.db import Base
from .User import User

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .Organization import Organization
    from .Team import Team
    from .Bug import Bug

class Project(Base):

    __tablename__ = "projects"

    project_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True, index=True)
    project_name: Mapped[str] = mapped_column()
    project_bugs: Mapped["Bug"] = relationship(back_populates="project")
    category: Mapped[str] = mapped_column(nullable=False)
    description: Mapped[str | None] = mapped_column(nullable=True)
    github_url: Mapped[str|None] = mapped_column(nullable=True)
    source: Mapped[BugSource] = mapped_column(default=BugSource.MANUAL)
    organization: Mapped["Organization"] = relationship(back_populates="projects")
    team: Mapped["Team"] = relationship(back_populates="team_projects")
    team_id: Mapped[int] = mapped_column(ForeignKey("teams.team_id"))
    status: Mapped[ProjectStatus | None]= mapped_column(default=ProjectStatus.ACTIVE)
    created_by: Mapped[User] = mapped_column(ForeignKey("users.user_id"))
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())
    organization_id: Mapped[int | None] = mapped_column(
        ForeignKey("organizations.organization_id"),nullable=True)


    