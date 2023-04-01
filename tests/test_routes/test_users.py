from sqlalchemy.sql import text
from sqlalchemy import select


import sys, os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))) 
from app.main import app
from app.api.models.models import User

def test_register(client, db_session, register_payload):
    wrong_password_payload = register_payload.copy()
    wrong_password_payload["passwordConfirm"] = "wrong_password"
    response = client.post("/api/users/register", json=wrong_password_payload)
    assert response.content ==  b'{"detail":"Passwords do not match"}'
    response = client.post("/api/users/register", json=register_payload)
    assert response.status_code == 201
    response = client.post("/api/users/register", json=register_payload)
    assert response.content == b'{"detail":"Account already exist"}'
    
def test_login(client, register_payload, user_created, db_session):
    login_payload = {
                    "email": register_payload['email'],
                    "password": register_payload['password']
                    }
    response = client.post("/api/users/login", json=login_payload)
    assert response.status_code == 200
    access_token = response.json()["access_token"]
    assert access_token is not None
    response = client.get("/api/users/refresh")
    refresh_token = response.json()["access_token"]
    assert refresh_token is not None
    response = client.get("/api/users/me")
    assert response.status_code == 200

def test_change_password(client, register_payload, user_created, db_session, normal_user_token_headers):
    change_password_payload = {
        "email": register_payload['email'],
        "current_password": register_payload['password'],
        "new_password": 'new_secret_password'
    }
    response = client.put(f"/api/users/{user_created}/change-password", json=change_password_payload, headers=normal_user_token_headers)
    assert response.status_code == 200
    change_password_payload = {
        "email": register_payload['email'],
        "current_password": register_payload['password'],
        "new_password": 'new_secret_password'
    }
    response = client.put(f"/api/users/{user_created}/change-password", json=change_password_payload, headers=normal_user_token_headers)
    assert response.status_code == 401
    assert response.json()['detail'] == 'Incorrect credentials'

    response = client.put(f"/api/users/42/change-password", json=change_password_payload, headers=normal_user_token_headers)
    assert response.status_code == 401
    assert response.json()['detail'] == 'Unauthorized user'

def test_delete(client ,db_session, user_created, register_payload):
    stmt = select(User).where(User.name == "John")
    user_id = db_session.execute(stmt).first()[0].id
    response = client.delete(f"/api/users/{user_id}")
    assert response.status_code == 200
    assert not db_session.execute(text(f"select * from users where email = '{register_payload['email']}'")).fetchall()