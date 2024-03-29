from sqlalchemy.sql import text

def test_create_activity(client, normal_user_token_headers):
    data = {
            "title": "teste2",
            "activity": "test2body",
            "user_id": 1,
            "created_at": "2023-02-26T12:01:00.651Z"
            }
    response = client.post("/api/activities",json=data,headers=normal_user_token_headers)
    assert response.status_code == 201

def test_retrieve_activity(client, normal_user_token_headers, db_session, activity_created):
    start_date = "2023-01-01"
    end_date = "2023-12-30"
    response = client.get(f"/api/activities?start_date={start_date}&end_date={end_date}",headers=normal_user_token_headers)
    assert response.status_code == 200
    assert response.json()["results"] == 1