from config.db import Base
from sqlalchemy import Integer, String, ForeignKey, Boolean, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column
from datetime import datetime

class RefreshToken(Base):

    __tablename__ = "refresh_tokens"

    token_id:Mapped[int]= mapped_column(primary_key=True, autoincrement=True) 
    user_id:Mapped[int] = mapped_column(ForeignKey("users.id"), nullable=False)
    token_hash: Mapped[str] = mapped_column(nullable=False, unique=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now()  ,nullable=True)
    expires_in: Mapped[datetime] = mapped_column(nullable=False)
    revoked: Mapped[bool] = mapped_column(default=False, nullable=False)




