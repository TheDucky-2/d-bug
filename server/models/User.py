from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, DateTime, func
from constants.enums import Subscription, UserType, MemberRole
from datetime import datetime
from config.db import Base
from models.Role import Role 
from typing import TYPE_CHECKING

if TYPE_CHECKING:

    from models.Member import Member

class User(Base):

    __tablename__ = "users"

    user_id: Mapped[int] =  mapped_column(primary_key=True, autoincrement=True, index=True)
    full_name: Mapped[str] = mapped_column()
    email: Mapped[str] = mapped_column(unique=True)
    password: Mapped[str] = mapped_column()
    user_type: Mapped[UserType] = mapped_column(default=UserType.USER.value, nullable=False)
    subscription: Mapped[Subscription] = mapped_column(default=Subscription.FREE.value)
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())
    membership: Mapped["Member"] = relationship("Member", back_populates="user")