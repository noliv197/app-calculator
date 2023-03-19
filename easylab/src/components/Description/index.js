import DescStyle from './style'
import desc from './db.json'

function Description(props){
    const descList = desc[props.type]
    return(
        <DescStyle>
            <h1>{descList[props.filter].title}</h1>
            <p>{descList[props.filter].description}</p>
            <span>{descList[props.filter].equation}</span>
        </DescStyle>
    )
}

export default Description