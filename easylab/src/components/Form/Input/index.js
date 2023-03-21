import FieldsetStyle from "./style"
import {IconButton} from '../../Button'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'

function Input(props){
    function getValue(event){
        props.state.set(event.target.value)
    }
    function validate(){
        
    }
    return(
        <FieldsetStyle>
            <label 
                htmlFor={props.id}
                className={props.labelSmall? 'small': ''}
            >{props.label}</label>
            <input
                id={props.id}
                type={props.type} 
                data-value={props.value}
                value={props.state.state}
                required={props.required}
                placeholder={props.placeholder}
                onChange={getValue}
                onBlur={validate}
            ></input>
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