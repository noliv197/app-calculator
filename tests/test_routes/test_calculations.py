def test_create_calculation(client, normal_user_token_headers):
    test_cases = [
       {
        'type':'mass',
        'from_':'g',
        'to':'mg',
        'value_from':3.14,
        'value':3140
       } ,
        {
        'type':'volume',
        'from_':'ml',
        'to':'l',
        'value_from':3.14,
        'value':0.00314
       } 
    ]
    for test_case in test_cases:
        value = test_case.pop('value')
        response = client.post(f"/api/convertions",headers=normal_user_token_headers, json=test_case)
        assert response.status_code == 201
        assert response.json()['value'] == value

def test_get_calculations(client, normal_user_token_headers, convertion_created):
    start_date = "2023-01-01"
    end_date = "2023-12-30"
    response = client.get(f"/api/convertions?start_date={start_date}&end_date={end_date}",headers=normal_user_token_headers)
    assert response.status_code == 200
    assert response.json()["results"] == 1
