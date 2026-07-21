from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from config.db import get_db, SessionLocal
from routes.auth_router import auth_router
from routes.org_router import org_router
from routes.project_router import project_router
from routes.email_router import email_router
from auth.authorization.insert_permissions import insert_permissions
from config.db import Base, engine
from logger.logger import create_logger
from auth.authorization.insert_permissions import insert_permissions
import os

FRONTEND_URL=os.environ["FRONTEND_URL"]
allowed_origins = [FRONTEND_URL, "http://127.0.0.1:5173"]
logger = create_logger(__name__.split(".")[1])

Base.metadata.create_all(engine)

app = FastAPI()

db = SessionLocal()
try: 
    insert_permissions(db)

except Exception as error:
    logger.info("Received error while inserting permissions into the database")
    raise error

finally:
    db.close()



app.include_router(auth_router)
app.include_router(org_router)
app.include_router(project_router)
app.include_router(email_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home(db: Session = Depends(get_db)):

    return "Welcome to D-bug API!"