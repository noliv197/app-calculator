import Header from '../components/Header'
import Form from '../components/Form'
import { useState } from 'react'

function ResetPassword() {
    const [resetPassword, setResetPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    let stateList = {
        "resetPassword": {
            "name": resetPassword,
            "set": setResetPassword
        },
        "confirmPassword": {
            "name": confirmPassword,
            "set": setConfirmPassword
        }
    }
    return (
        <>
            <Header
                navList={["calculator"]}
            />
            <main>
                <Form
                    type='reset' 
                    button='Confirm' 
                    h1='Reset Password'
                    stateList={stateList}
                    links={false}
                />
            </main>
        </>
    );
}
  
export default ResetPassword;