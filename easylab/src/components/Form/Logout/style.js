import styled from "styled-components";

const LogoutStyle = styled.form`
    button{
        background-color: ${props => props.theme.color.background.primary};
        border: none;
        color: ${props => props.theme.color.text.secondary};
        margin-left: ${props => props.theme.spacing.rg};
        text-decoration: underline;
        font-size: ${props => props.theme.typography.size.rg};
        cursor: pointer;
    }
`

export default LogoutStyle