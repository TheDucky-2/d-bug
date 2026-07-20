import pytest
from fastapi.testclient import TestClient
from app.main import app

import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from fastapi.testclient import TestClient
import os
from app.main import app
from config.db import Base, get_db

TEST_DATABASE_URL = os.environ["TEST_DB_URL"]

test_engine = create_engine(TEST_DATABASE_URL)

TestingSessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=test_engine
)

# for pytest
@pytest.fixture()
def test_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

# for FastAPI
def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

@pytest.fixture
def test_client():

    app.dependency_overrides[get_db] = override_get_db

    with TestClient(app) as client:
        yield client

    app.dependency_overrides.clear()

@pytest.fixture(scope="session", autouse=True)
def create_tables():

    Base.metadata.create_all(bind=test_engine)

    yield 

    Base.metadata.drop_all(bind=test_engine)