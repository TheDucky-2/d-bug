import pytest
from services.Authenticator import Authenticator
from schemas.user import UserCreate
from app.main import app

auth = Authenticator()

### FUNCTION TEST

def test_sign_up(test_client, test_get_db, create_tables):
    
    user = UserCreate(
        full_name= "Alice Smith",
        email = "test@email.com",
        password = "12345678"
    )

    db = test_get_db

    response = auth.sign_up(user=user,db = db)

    print(response)

    assert response == {
            "message": "Account Created Successfully!",
            "data": {
                "full_name": "Alice Smith",
                "email" : "test@email.com"
            }

        }


### ROUTE TEST

def test_sign_up_route(test_client):

    response = test_client.post(
        "/auth/sign-up", 
        json = {"full_name": "Kevin Smith",
                "email": "test1@email.com",
                "password": "12345678"
                    })

    assert response.status_code == 201





