import units from './db.json'
import ConversorStyle from "./style";
import Select from './Select'
import {IconButton} from '../Button'
import {BsArrowLeftRight} from 'react-icons/bs'
import {conversor} from '../../api/axios';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import ConversorContext from '../../context/ConversorProvider';

function ConversorForm(){
    const {auth} = useContext(AuthContext)
    const {conversorFilter} = useContext(ConversorContext)
    const [valueToConvert, setValueToConvert] = useState('')
    const [valueConverted, setValueConverted] = useState('')
    const [initialUnit, setInitialUnit] = useState('')
    const [finalUnit, setFinalUnit] = useState('')
    const unitsList = units[conversorFilter]

    async function getConversionResult(event){
        event.preventDefault()
        try{
            const response = await conversor.post('/convertions',
                {
                    type: conversorFilter,
                    from_: initialUnit,
                    to: finalUnit,
                    value_from: valueToConvert
                },
                {
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${auth.accessToken}`
                    }
                }
            )
            setValueConverted(response.data.value)
        }catch(err){
            console.log(err)
        }
    }
    return(
        <ConversorStyle>
            {/* <h2></h2> */}
            <form onSubmit={event => getConversionResult(event)}>
                <fieldset>
                    <input type='number' value={valueToConvert} onChange={e => setValueToConvert(e.target.value)}></input>
                    <Select units={unitsList} value={initialUnit} setValue={setInitialUnit}/>
                </fieldset>
                <IconButton title={'Convert'} type='submit'>
                    <BsArrowLeftRight/>
                </IconButton>
                <fieldset>
                    <output value={valueConverted}>{valueConverted}</output>
                    <Select units={unitsList} value={finalUnit} setValue={setFinalUnit}/>
                </fieldset>
            </form>
        </ConversorStyle>
    )
}

export default ConversorForm