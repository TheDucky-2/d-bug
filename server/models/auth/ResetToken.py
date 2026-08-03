from config.db import Base
from sqlalchemy import Integer, String, ForeignKey, Boolean, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column
from datetime import datetime


class ResetToken(Base):

    __tablename__ = "reset_tokens"

    token_id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, index=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.user_id"))
    token_hash: Mapped[str] = mapped_column(String) 
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())
    expires_in: Mapped[datetime] = mapped_column(nullable=False)
    revoked: Mapped[bool] = mapped_column(default=False,nullable=False)

