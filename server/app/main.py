from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from config.db import get_db, SessionLocal
from routes.auth_router import auth_router
from routes.org_router import org_router
from routes.project_router import project_router
from auth.authorization.insert_permissions import insert_permissions
from config.db import Base, engine
<<<<<<< HEAD
import models
from dotenv import load_dotenv
from logger.logger import create_logger
=======
from auth.authorization.insert_permissions import insert_permissions
>>>>>>> main
import os

Base.metadata.create_all(engine)

db = SessionLocal()

try:
    db = SessionLocal()
    insert_permissions(db)

except Exception as error:
    raise error

finally:
    db.close()


app = FastAPI()

allowed_origins = [os.environ["FRONTEND_URL"], "http://127.0.0.1:5173"]
logger = create_logger(__name__.split(".")[0])

try: 
    db = SessionLocal()
    logger.info("Inserting permissions into the database")
    insert_permissions(db)
    
except Exception as error:
    logger.info("Received error while inserting permissions into the database")
    raise error

app.include_router(auth_router)
app.include_router(org_router)
app.include_router(project_router)
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