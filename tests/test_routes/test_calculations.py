def test_create_convertion(client, normal_user_token_headers):
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