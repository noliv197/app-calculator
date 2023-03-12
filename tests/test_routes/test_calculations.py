def test_retrieve_activity(client, normal_user_token_headers):
    test_cases = [
       {
        'type':'mass',
        'from_':'g',
        'to':'mg',
        'value':3.14,
        'value_from':3140
       } ,
        {
        'type':'mass',
        'from_':'g',
        'to':'kg',
        'value':3.14,
        'value_from':3140
       } 
    ]
    for test_case in test_cases:
        response = client.post(f"/convert?type={test_case['type']}&from_={test_case['from_']}&to={test_case['to']}&value_from={test_case['value_from']}",headers=normal_user_token_headers)
        assert response.status_code == 200