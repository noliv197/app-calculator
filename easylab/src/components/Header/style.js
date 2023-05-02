import styled from "styled-components";

const HeaderStyle = styled.header`
    background-color: ${props => props.theme.color.background.primary};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${props => props.theme.spacing.sm};

    img{
        weight: 125px;
        height: 50px;
    }
    nav{
        display: flex;
        align-items: center;
    }
    .first-nav > a:last-child{
        color: ${props => props.theme.color.text.secondary};
        margin-left: ${props => props.theme.spacing.rg};
        text-decoration: underline;
    }
    .second-nav > a:nth-child(even){
        margin: 0 ${props => props.theme.spacing.sm};
    }
    .second-nav > a{
        border-radius: 4px;
        border: 2px solid ${props => props.theme.color.border.secondary};
        color: ${props => props.theme.color.text.secondary};
        font-size: ${props => props.theme.typography.size.rg};
        font-weight: ${props => props.theme.typography.weight.extraBold};
        padding: ${props => props.theme.spacing.sm};
    }
    .second-nav a:hover{
        border-color: ${props => props.theme.color.border.primary};
        box-shadow: ${props => props.theme.color.shadow.secondary};
    }
`

export default HeaderStyle