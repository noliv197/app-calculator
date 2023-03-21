import Header from '../components/Header'
import Form from '../components/Form'
import { useState } from 'react'

function Register() {
    const [registerUsername, setRegisterUsername] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerConfirm, setRegisterConfirm] = useState('')
    let stateList = {
        "registerEmail":{
            "name": registerEmail,
            "set": setRegisterEmail
        },
        "registerUsername": {
            "name": registerUsername,
            "set": setRegisterUsername
        },
        "registerPassword": {
            "name": registerPassword,
            "set": setRegisterPassword
        },
        "registerConfirm": {
            "name": registerConfirm,
            "set": setRegisterConfirm
        }
    }
    return (
        <>
            <Header
                navList={["calculator"]}
            />
            <main>
                <Form
                    type='register' 
                    button='Register' 
                    h1='Register'
                    stateList={stateList}
                    links={true}
                />
            </main>
        </>
    );
}
  
export default Register;