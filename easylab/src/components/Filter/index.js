
import FilterStyle from './style'
import filters from './db.json'

function Filter(props){
    const filterList = filters[props.type]

    function selectFilter(option) {
		return(
            props.filter === option.name ? 
            props.setFilter(props.init) : props.setFilter(option.name)
        )
	}
    return(
        <FilterStyle>
            {filterList.map(option => (
                <button
                    type='button'
                    key={option.id}
                    className= {`filter ${props.filter === option.name? 'active': ''}`}
                    onClick={() => selectFilter(option)}
                >
                    {option.name}
                </button>
            ))}
        </FilterStyle>
    )
}

export default Filter