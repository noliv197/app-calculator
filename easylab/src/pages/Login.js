import Header from '../components/Header'
import Form from '../components/Form'
import { useState } from 'react';

function Login() {
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    let stateList = {
        "loginUsername": {
            "name": loginUsername,
            "set": setLoginUsername
        },
        "loginPassword": {
            "name": loginPassword,
            "set": setLoginPassword
        }
    }
    return (
        <>
            <Header
                navList={["calculator"]}
            />
            <main>
                <Form 
                    type='login' 
                    button='Login' 
                    h1='Login'
                    stateList={stateList}
                    links={true}
                />
            </main>
        </>
    );
}
  
export default Login;