import {useState, useRef, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthProvider'
import axios from '../../api/axios'
import Button from '../Button'
import Input from './Input'
import FormStyle from './style'

const LOGIN_URL = "/login"

function LoginForm(){
    const { setAuth } = useContext(AuthContext)
    const initRef = useRef()
    const errRef = useRef()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    //     const [success, setSuccess] = useState(false)

    useEffect(()=>{
        initRef.current.focus()
    },[])
    useEffect(()=>{
        setErrorMessage('')
    },[email, password])

    async function submit(e){
        e.preventDefault()
        try{
            const response = await axios.post(LOGIN_URL,
                {
                    email: email,
                    password: password,
                },
                {
                    headers: { "Content-type": "application/json"}
                }
            )
            const accessToken = response?.data?.access_token
            console.log('Login realizado com sucesso') 
            setAuth({email, password, accessToken})
            setEmail('')
            setPassword('')
        }
        catch(err){
            if(!err?.response){
               setErrorMessage('No server response') 
            }else if(err.response?.status === 400){
                setErrorMessage('Wrong Email or Password') 
            }else if(err.response?.status === 401){
                setErrorMessage('Unauthorized') 
            }else{
                setErrorMessage('Login Failed') 
            }
            errRef.current.focus()
        }
    }
    return(
        <FormStyle>
            <p ref={errRef} className={errorMessage? "visible": "invisible"}
            aria-live="assertive">{errorMessage}</p>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <Input
                    label='Enter your email'
                    labelSmall={false}
                    type='email'
                    id='email'
                    reference={initRef}
                    auto='on'
                    setState={{state: email, set: setEmail}}
                    setFocus={{state: null, set: null}}
                    aria={{invalid: null, describe: null}}
                    placeholder='example@gmail.com'
                    required
                />
                <Input
                    label='Enter your password'
                    labelSmall={false}
                    type='password'
                    id='password'
                    auto={"false"}
                    setState={{state: password, set: setPassword}}
                    setFocus={{state: null, set: null}}
                    aria={{invalid: null, describe: null}}
                    required
                />
                <Button 
                    type='submit'
                    disable={false}
                >Login</Button>
            </form>
            <nav>
                <a href='/user/register'>Not Register? Sign up now</a>
                <a href='/user/forgot-password'>Forgot Password?</a>
            </nav> 
        </FormStyle>
    )
}

export default LoginForm