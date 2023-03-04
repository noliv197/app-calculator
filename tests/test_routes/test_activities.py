from fastapi.testclient import TestClient
import json
import pytest

def test_create_activity(client, normal_user_token_headers):
    data = {
            "title": "teste2",
            "activity": "test2body",
            "user_id": 1,
            "created_at": "2023-02-26T12:01:00.651Z"
            }
    response = client.post("/",json=data,headers=normal_user_token_headers)
    assert response.status_code == 201

def test_retrieve_activity(client, normal_user_token_headers):
    #pass start and end dates
    response = client.get("/",headers=normal_user_token_headers)
    print(response.content)
    assert False