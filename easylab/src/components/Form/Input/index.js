import FieldsetStyle from "./style"
import {IconButton} from '../../Button'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'

function Input(props){
    return(
        <FieldsetStyle>
            <label 
                htmlFor={props.id}
                className={props.labelSmall? 'small': ''}
            >{props.label}</label>
            <input
                type={props.type} 
                id={props.id}
                ref={props.reference}
                autoComplete={props.auto}
                data-value={props.value}
                value={props.setState.state}
                required={props.required}
                placeholder={props.placeholder}
                aria-invalid={props.aria.invalid ? "false": "true"}
                aria-describedby={props.aria.describe}
                onChange={(e)=> props.setState.set(e.target.value)}
                onFocus={()=> props.setFocus.set(true)}
                onBlur={()=> props.setFocus.set(false)}
                className={
                    props.aria.invalid &&  props.setState.state? "valid" : 
                    props.setState.state? 'invalid' : ''}
            ></input>
            { 
                props.id === 'email' ? 
                    <p id={props.aria.describe} className={props.setFocus.state && props.setState.state && !props.aria.invalid  ? "visible" : "invisible"}>
                        Must contain a <span aria-label="at symbol">@</span> 
                    </p> 
                : props.id === 'username' ?
                    <p id={props.aria.describe} className={props.setFocus.state && props.setState.state && !props.aria.invalid ? "visible" : "invisible"}>
                        4 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p> 
                : props.id === 'password' ?

                    <p id={props.aria.describe} className={props.setFocus.state && !props.aria.invalid ? "visible" : "invisible"}>
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: 
                            <span aria-label="exclamation mark">!</span> 
                            <span aria-label="at symbol">@</span> 
                            <span aria-label="hashtag">#</span> 
                            <span aria-label="dollar sign">$</span> 
                            <span aria-label="percent">%</span>
                            <span aria-label="percent">*</span>
                            <span aria-label="percent">&</span>
                    </p> 
                :
                    <p id={props.aria.describe} className={props.setFocus.state && !props.aria.invalid ? "visible" : "invisible"}>
                        Must match the password.
                    </p>
            }
            {props.type === 'password'?
                <IconButton 
                    type='button' 
                    class="absolute" 
                    title="show password"
                ><AiFillEye/></IconButton> : null
            }
        </FieldsetStyle>
    )
}

export default Input