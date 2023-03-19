def test_create_convertion(client, normal_user_token_headers):
    dilution = {'c1':1, 'v1': 8, 'c2': 2, 'v2': 4}
    for key in dilution:
        payload = {i:(dilution[i] if i!=key else None) for i in dilution}
        response = client.post(f"/api/dilutions",headers=normal_user_token_headers, json=payload)
        assert response.status_code == 201
        assert response.json()[key] == dilution[key]
