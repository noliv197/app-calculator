import HeaderStyle from "./style";
import links from "./db.json"

function Header(props){
    return(
        <HeaderStyle>
            <nav className="first-nav">
                <a href="/"><img src="/img/logo.png" alt="Easylab Logo"/></a>
                <a href="/user/login">Sign In</a>
            </nav>
            <nav className="second-nav">
                {props.navList.map((element,index) =>{
                    return(
                        <a 
                            href={links[element].href} 
                            key={index}
                        >{links[element].text}</a>
                    )
                })}
            </nav>
        </HeaderStyle>
    )
}

export default Header