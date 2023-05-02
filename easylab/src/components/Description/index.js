import DescStyle from './style'
import desc from './db.json'
import { useContext } from 'react';
import ConversorContext from '../../context/ConversorProvider';

function Description(props){
    const {conversorFilter} = useContext(ConversorContext)
    const descList = desc[props.type]
    return(
        <DescStyle>
            <h1>{descList[conversorFilter].title}</h1>
            <p>{descList[conversorFilter].description}</p>
            <span>{descList[conversorFilter].equation}</span>
        </DescStyle>
    )
}

export default Description