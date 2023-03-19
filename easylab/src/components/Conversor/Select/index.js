import SelectStyle from './style'

function Select(props){
    return(
        <SelectStyle>
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