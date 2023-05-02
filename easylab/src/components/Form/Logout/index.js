import LogoutStyle from './style.js'
import axios from '../../../api/axios';
import { useNavigate } from "react-router-dom";
import AuthContext from '../../../context/AuthProvider';
import { useContext } from 'react';

const LOGOUT_URL = "/logout"
function Logout(){
    const user = useContext(AuthContext)
    const navigate = useNavigate()

    async function userLogout(event){
        event.preventDefault()
        try{
            await axios.get(LOGOUT_URL,
                {
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.auth.accessToken}`
                    }
                }
            )
            console.log('Logout realizado com sucesso')
            user.auth = {}
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
    return(
        <LogoutStyle onSubmit={userLogout}>
            <input type="hidden"></input>
            <button>Log out</button>
        </LogoutStyle>
    )
}

export default Logout
