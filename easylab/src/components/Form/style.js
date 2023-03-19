import styled from "styled-components";

const FormStyle = styled.section`
    padding: ${props => props.theme.spacing.md} 0;
    h1{
        font-size: ${props => props.theme.typography.size.lg};
        font-weight: ${props => props.theme.typography.weight.extraBold};
        color: ${props => props.theme.color.text.primary};
        text-align: center;
    }
    form{
        width: 50%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    form fieldset{
        margin: ${props => props.theme.spacing.md} 0;
    }
    form > button{
        align-self: center;
    }

    nav{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: ${props => props.theme.spacing.lg};
    }
    nav a{
        font-size: ${props => props.theme.typography.size.rg};
        font-weight: ${props => props.theme.typography.weight.extraBold};
        color: ${props => props.theme.color.text.primary};
        margin: ${props => props.theme.spacing.sm} 0;
    }
    a:hover{
        text-decoration: underline;
    }
`

export default FormStyle