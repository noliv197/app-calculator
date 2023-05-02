import HeaderStyle from "./style";
import links from "./db.json";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthProvider';
import Logout from "../Form/Logout";

function Header(props){
    const user = useContext(AuthContext)
    const [isLogged,setIsUserLogged] = useState(false)
    useEffect(()=>{
        setIsUserLogged(Object.keys(user.auth).length !== 0)
    },[user])
    return(
        <HeaderStyle>
            <nav className="first-nav">
                <Link to={"/"}><img src="/img/logo.png" alt="Easylab Logo"/></Link>
                
                { isLogged ? 
                    <Logout/> :
                    <Link to={"/user/login"}>Sign In</Link>
                }
            </nav>
            <nav className="second-nav">
                {props.navList.map((element,index) =>{
                    return(
                        <Link
                            key={index}
                            to={links[element].href}
                        >{links[element].text}</Link>
                    )
                })}
            </nav>
        </HeaderStyle>
    )
}

export default Header