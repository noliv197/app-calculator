from fastapi.testclient import TestClient
import json
import pytest
from sqlalchemy.sql import text
from sqlalchemy import select


import sys, os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))) 
from app.main import app
from app.models import User


register_payload = {
                    "name": "John",
                    "email": "John@example.com",
                    "password": "secret_password",
                    "passwordConfirm": "secret_password"
                    }

def test_register(client, db_session):
    wrong_password_payload = register_payload.copy()
    wrong_password_payload["passwordConfirm"] = "wrong_password"
    response = client.post("/register", json=wrong_password_payload)
    assert response.content ==  b'{"detail":"Passwords do not match"}'
    response = client.post("/register", json=register_payload)
    assert response.status_code == 201
    response = client.post("/register", json=register_payload)
    assert response.content == b'{"detail":"Account already exist"}'
    

def test_login(client):
    login_payload = {
                    "email": register_payload['email'],
                    "password": register_payload['password']
                    }
    response = client.post("/login", json=login_payload)
    print(response.content)
    assert response.status_code == 200
    assert response.json()["access_token"] is not None

def test_delete(client ,db_session):
    stmt = select(User).where(User.name == "John")
    user_id = db_session.execute(stmt).first()[0].id
    response = client.delete(f"/{user_id}")
    print(response.content)
    assert response.status_code == 200
    assert not db_session.execute(text(f"select * from users where email = '{register_payload['email']}'")).fetchall()