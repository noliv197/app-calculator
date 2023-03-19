import styled from "styled-components";

const SelectStyle = styled.select`
    border: 2px solid ${props => props.theme.color.border.secondary};
    display: block;
    font-family: ${props => props.theme.typography.font};
    height: 40px;
    width: 100%;
    padding: ${props => props.theme.spacing.sm};

    &:focus{
        outline: none;
        border-color: ${props => props.theme.color.border.primary};
    }
`

export default SelectStyle