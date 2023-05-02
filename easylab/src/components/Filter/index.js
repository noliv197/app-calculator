import FilterStyle from './style'
import filters from './db.json'
import ConversorContext from '../../context/ConversorProvider'
import { useContext } from 'react';

function Filter(props){
    const filterList = filters[props.type]
    const {conversorFilter, setConversorFilter} = useContext(ConversorContext)

    function selectFilter(option) {
		return(
            conversorFilter === option.name ? 
            setConversorFilter(props.init) : setConversorFilter(option.name)
        )
	}
    return(
        <FilterStyle>
            {filterList.map(option => (
                <button
                    type='button'
                    key={option.id}
                    className= {`filter ${conversorFilter === option.name? 'active': ''}`}
                    onClick={() => selectFilter(option)}
                >
                    {option.name}
                </button>
            ))}
        </FilterStyle>
    )
}

export default Filter