import units from './db.json'
import ConversorStyle from "./style";
import Select from './Select'
import {IconButton} from '../Button'
import {BsArrowLeftRight} from 'react-icons/bs'

function ConversorForm(props){
    const unitsList = units[props.filter]
    return(
        <ConversorStyle>
            {/* <h2></h2> */}
            <form>
                <fieldset>
                    <input type='number'></input>
                    <Select units={unitsList}/>
                </fieldset>
                <IconButton><BsArrowLeftRight/></IconButton>
                <fieldset>
                    <output></output>
                    <Select units={unitsList}/>
                </fieldset>
            </form>
        </ConversorStyle>
    )
}

export default ConversorForm