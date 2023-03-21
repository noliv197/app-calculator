import Header from '../components/Header'
import Form from '../components/Form'
import { useState } from 'react';

function ForgotPassword() {
    const [forgotEmail, setForgotEmail] = useState('')
    let stateList = {
        "forgotEmail": {
            "name": forgotEmail,
            "set": setForgotEmail
        }
    }
    return (
        <>
            <Header
                navList={["calculator"]}
            />
            <main>
                <Form
                    type='forgot' 
                    button='Send Request' 
                    h1='Reset Password'
                    stateList={stateList}
                    links={false}
                />
            </main>
        </>
    );
}
  
export default ForgotPassword;