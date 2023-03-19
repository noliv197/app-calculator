import styled from "styled-components";

const ConversorStyle = styled.section`
    form{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        padding: ${props => props.theme.spacing.xg} 0;
        width: 80%;
    }    
    fieldset{
        width: 45%;
        box-sizing: border-box;
    }
    input,
    output{
        border: 2px solid ${props => props.theme.color.border.secondary};
        box-sizing: border-box;
        display: block;
        font-family: ${props => props.theme.typography.font};
        margin-bottom: ${props => props.theme.spacing.sm};
        height: 40px;
        width: 100%;
        padding: ${props => props.theme.spacing.sm};
    
    }
    input:focus{
        outline: none;
        border-color: ${props => props.theme.color.border.primary};
    }
`

export default ConversorStyle