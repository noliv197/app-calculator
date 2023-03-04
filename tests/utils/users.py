import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))) 

from app.api.database.repository.users import create_new_user, find_user_by_email
from fastapi.testclient import TestClient
from app.schemas import CreateUserSchema
from sqlalchemy.orm import Session


def user_authentication_headers(client: TestClient, email: str, password: str):
    login_payload = {"email": email, "password": password}
    r = client.post("/login", json=login_payload)
    response = r.json()
    auth_token = response["access_token"]
    headers = {"Authorization": f"Bearer {auth_token}"}
    return headers


def authentication_token_from_email(client: TestClient, email: str, db: Session):
    """
    Return a valid token for the user with given email.
    If the user doesn't exist it is created first.
    """
    password = "random-passW0rd"
    user = find_user_by_email(email=email, db=db)
    if not user:
        user_in_creation = CreateUserSchema(name=email, email=email, password=password, passwordConfirm=password)
        user = create_new_user(payload=user_in_creation, db=db)
    return user_authentication_headers(client=client, email=email, password=password)