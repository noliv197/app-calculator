import styled from "styled-components";

const FooterStyle = styled.footer`
    background-color: ${props => props.theme.color.background.primary};
    padding: ${props => props.theme.spacing.rg} 0;
    text-align: center;

    svg{
        width: 60px;
        height: 60px;
        display: block;
        margin: 0 auto;
        // color: ${props => props.theme.color.background.light};
    }
`

export default FooterStyle