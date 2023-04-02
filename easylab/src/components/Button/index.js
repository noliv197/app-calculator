import {ButtonStyle, IconButtonStyle} from './style'

function Button(props){
    return(
        <ButtonStyle type={props.type}>
           {props.children}
        </ButtonStyle>
    )
}

export function IconButton(props){
    return(
        <IconButtonStyle 
            type={props.type}
            title={props.title}
            className={props.class}
            disabled={props.disabled? props.disabled: false}
        >{props.children}</IconButtonStyle>
    )
}

export default Button