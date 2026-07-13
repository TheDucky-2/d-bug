from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import ForeignKey, DateTime, func
from schemas.enums import Subscription, UserRole
from datetime import datetime
from config.db import Base

class User(Base):

    __tablename__ = "users"

    user_id: Mapped[int] =  mapped_column(primary_key=True, autoincrement=True, index=True)
    full_name: Mapped[str] = mapped_column()
    email: Mapped[str] = mapped_column(unique=True)
    password: Mapped[str] = mapped_column()
    role: Mapped[UserRole] = mapped_column(default=UserRole.ADMIN.value, nullable=False)
    subscription: Mapped[Subscription] = mapped_column(default=Subscription.FREE.value)
    organization_id: Mapped[int | None] = mapped_column(ForeignKey("organizations.organization_id"), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())