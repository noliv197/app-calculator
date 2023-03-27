import {useState, useRef, useEffect} from 'react'
import Button from '../Button'
import Input from './Input'
import FormStyle from './style'
import axios from '../../api/axios'

const REGISTER_URL = "/register"
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}$/
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

function RegisterForm(){
    const initRef = useRef()
    const errRef = useRef()
    
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [focusEmail, setFocusEmail] = useState(false)

    const [username, setUsername] = useState('')
    const [validUsername, setValidUsername] = useState(false)
    const [focusUsername, setFocusUsername] = useState(false)

    const [password, setPassword] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [focusPwd, setFocusPwd] = useState(false)

    const [confirm, setConfirm] = useState('')
    const [validConfirm, setValidConfirm] = useState(false)
    const [focusConfirm, setFocusConfirm] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')
    //     const [success, setSuccess] = useState(false)

    useEffect(()=>{
        initRef.current.focus()
    },[])
    useEffect(()=>{
        const result = EMAIL_REGEX.test(email)
        setValidEmail(result)
    },[email])
    useEffect(()=>{
        const result = USER_REGEX.test(username)
        setValidUsername(result)
    },[username])
    useEffect(()=>{
        const result = PWD_REGEX.test(password)
        setValidPwd(result)
        const match = password === confirm
        setValidConfirm(match)
    },[password,confirm])
    useEffect(()=>{
        setErrorMessage('')
    },[email, username, password, confirm])

    async function submit(e){
        e.preventDefault()
        console.log(email,username, password, confirm)
        try{
            await axios.post(REGISTER_URL,
                {
                    headers: { "Content-type": "application/json"},
                    withCredentials: true
                },
                    JSON.stringify({
                    name: username,
                    email: email,
                    password: password,
                    passwordConfirm: confirm
                })
            )
        }
        catch(err){
            if(!err?.response){
               setErrorMessage('No server response') 
            }else if(err.response?.status === 409){
                setErrorMessage('Username already taken') 
            }else if(err.response?.status === 400){
                setErrorMessage('400 error') 
            }else if(err.response?.status === 422){
                setErrorMessage('422 error') 
            }
            errRef.current.focus()
        }
    }
    return(
        <FormStyle>
            <p ref={errRef} className={errorMessage? "visible": "invisible"}
            aria-live="assertive">{errorMessage}</p>
            <h1>Register</h1>
            <form onSubmit={submit}>
                <Input
                    label='Choose your email'
                    labelSmall={false}
                    type='email'
                    id='email'
                    reference={initRef}
                    auto='on'
                    setState={{state: email, set: setEmail}}
                    setFocus={{state: focusEmail, set: setFocusEmail}}
                    aria={{invalid: validEmail, describe: 'emailnote'}}
                    placeholder='example@gmail.com'
                    required
                />
                <Input
                    label='Choose your username'
                    labelSmall={false}
                    type='text'
                    id='username'
                    auto='off'
                    setState={{state: username, set: setUsername}}
                    setFocus={{state: focusUsername, set: setFocusUsername}}
                    aria={{invalid: validUsername, describe: 'uidnote'}}
                    placeholder='Username'
                    required
                />
                <Input
                    label='Choose your password'
                    labelSmall={false}
                    type='password'
                    id='password'
                    auto={"false"}
                    setState={{state: password, set: setPassword}}
                    setFocus={{state: focusPwd, set: setFocusPwd}}
                    aria={{invalid: validPwd, describe: 'pwdnote'}}
                    required
                />
                <Input
                    label='Repeat password'
                    labelSmall={false}
                    type='password'
                    id='confirm'
                    auto={"false"}
                    setState={{state: confirm, set: setConfirm}}
                    setFocus={{state: focusConfirm, set: setFocusConfirm}}
                    aria={{invalid: validConfirm, describe: 'confirmnote'}}
                    required
                />
                <Button 
                    type='submit'
                    disable={!validUsername || !validEmail || !validPwd || !validConfirm? "true" : "false"}
                >Salvar</Button>
            </form>
        </FormStyle>
    )
}

export default RegisterForm