from fastapi.testclient import TestClient
from factories.auth import UserFactory, LoginPayloadFactory
from app.main import app

client = TestClient(app)

def test_login(client):
    #user = UserFactory()
    #login_payload = LoginPayloadFactory(username=user.username, password=user.password)
    #response = client.post("/login", json=login_payload)
    #print(dict(response))
    #assert response.status_code == 200
    #assert response.json()["access_token"] is not None
    print('aaaa')