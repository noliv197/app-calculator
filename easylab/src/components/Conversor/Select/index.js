import SelectStyle from './style'

function Select(props){
    function changeValue(event){
        props.setValue(event.target.value)
    }
    return(
        <SelectStyle value={props.value} onChange={changeValue}>
            {
                props.units.map(unit => (
                    <option 
                        value={unit.value} 
                        key={unit.value}
                    >{unit.label}</option>
                ))
            }
        </SelectStyle>
    )
}

export default Select