from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase
from sqlalchemy import DateTime, func
from constants.enums import Priority, Severity, BugStatus
from datetime import datetime
from config.db import Base

class Bug(Base):

    __tablename__ = "bugs"

    bug_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column()
    description: Mapped[str | None] = mapped_column(nullable=True)
    screenshot: Mapped[str | None] = mapped_column(nullable=True)
    priority: Mapped[Priority] = mapped_column(default="5")
    severity: Mapped[Severity] = mapped_column(default = "low")
    status: Mapped[BugStatus] = mapped_column(default="open")
    assignee: Mapped[str] = mapped_column(nullable=True)
    assigned_by: Mapped[str] = mapped_column(nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())

