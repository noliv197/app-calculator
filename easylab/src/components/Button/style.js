import styled from "styled-components";

export const ButtonStyle = styled.button`
    display: block;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${props => props.theme.color.background.primary};
    color: ${props => props.theme.color.text.secondary};
    font-size: ${props => props.theme.typography.size.rg};
    font-weight: ${props => props.theme.typography.weight.extraBold};
    padding: ${props => props.theme.spacing.rg};
    width: 45%;
    transition: .1s;

    &:hover{
        border-color: ${props => props.theme.color.border.primary};
        box-shadow: ${props => props.theme.color.shadow.primary};
    }

    .active{
        background-color: ${props => props.theme.color.background.secondary};
        box-shadow: ${props => props.theme.color.shadow.secondary};
        border: none;
    }
`
export const IconButtonStyle = styled.button`
    border: none;
    background-color: #fff;
    cursor: pointer;
    padding: 0;   

    svg{
        width: 25px;
        height: 25px;
    }
    &.absolute{
        position: absolute;
        right: 5px;
        top: 32px;
    }
`