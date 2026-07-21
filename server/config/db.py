from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from sqlalchemy.orm import DeclarativeBase
import os
load_dotenv()

DATABASE_URL = os.environ["DATABASE_URL"]

if not DATABASE_URL:
    raise ValueError("DATABASE_URL is missing in environment variables.")

engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    pool_recycle=300,
)

SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)

class Base(DeclarativeBase):
    pass

def get_db():
    db = SessionLocal()

    try:
        yield db
    
    finally:
        db.close()

    
    



    


