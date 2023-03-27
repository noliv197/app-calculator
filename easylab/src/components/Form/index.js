import Input from "./Input";
import FormStyle from "./style";
import Button from "../Button";
import data from "./db.json"
import inputs from "./program.json"
import { UserServer } from "../../api/server";

function Form(props){
    const formsData = data[props.type]
    const server = new UserServer()
    let states = []
    async function sendRequest(event){
        event.preventDefault()
        try{
            switch(props.type){
                case "login":
                    await server.loginRequest(...states)
                    break
                case "register":
                    await server.registerRequest(...states)
                    break
                case "reset":
                    await server.updateRequest(...states)
                    break
                case "forgot":
                    await server.updateRequest(...states)
                    break
                default: 
            }
        }catch(err){
            console.log(err)
        }
    }
    return(
        <FormStyle onSubmit={sendRequest}>
            {props.h1? <h1>{props.h1}</h1> : null}
            <form>
                {formsData.inputs.map(data => {
                    states.push(props.stateList[data.id].name)
                   return(
                       <Input
                           key={data.id}
                           id={data.id}
                           state={props.stateList[data.id]}
                           type={data.type}
                           placeholder={data.placeholder}
                           label={data.label}
                           required={data.required}
                           labelSmall={data.labelSmall? true : false}
                       />
                   ) 
                }
                )}
                <Button type='submit'>{props.button}</Button>
            </form>
            { props.links ? 
                <nav>
                    {formsData.links.map((data,index) => (
                        <a href={data.href} key={index}>{data.text}</a>
                    ))}
                </nav> : 
                null
            }
        </FormStyle>
    )
}

export function FormProgram(props){
    const inputList = inputs[props.filter]
    return(
        <FormStyle>
            <form>
                {inputList.map(data => (
                    <Input
                        key={data.value}
                        id={data.value}
                        value={data.value}
                        type={data.type}
                        placeholder={data.placeholder}
                        label={data.title}
                        required={data.required}
                    />
                ))}
                <Button type='submit'>{props.button}</Button>
            </form>
        </FormStyle>
    )
}

export default Form