import styled from "styled-components";
import ButtonStyle from "../Button/style";

const FilterStyle = styled.section`
    padding: ${props => props.theme.spacing.sm} 0;
    width: 90%;
    margin: 0 auto;

    .filter{
        border: 2.5px solid ${props => props.theme.color.border.secondary};
        border-radius: 4px;
        cursor: pointer;
        color: ${props => props.theme.color.text.secondary};
        font-size: ${props => props.theme.typography.size.rg};
        font-weight: ${props => props.theme.typography.weight.bold};
        padding: ${props => props.theme.spacing.sm};
        transition: .1s;
    }
    .filter:nth-child(even){
        margin: 0 ${props => props.theme.spacing.sm};
    }
    .filter:hover{
        border-color: ${props => props.theme.color.border.primary};
        box-shadow: ${props => props.theme.color.shadow.primary};
    }
    .active{
        background-color: ${props => props.theme.color.background.primary};
        box-shadow: ${props => props.theme.color.shadow.secondary};
        border: none;
    }
`

export default FilterStyle