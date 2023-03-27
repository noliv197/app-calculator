import styled from "styled-components";

const FieldsetStyle = styled.fieldset`
    display: flex;
    flex-direction: column;
    position: relative;
    label{
        font-size: ${props => props.theme.typography.size.md};
        font-weight: ${props => props.theme.typography.weight.normal};
        margin-bottom: ${props => props.theme.spacing.xs};
    }   
    label.small{
        font-size: ${props => props.theme.typography.size.rg};
        margin-bottom: ${props => props.theme.spacing.lg};
    } 
    input{
        box-sizing: border-box;
        // background-color: ${props => props.theme.color.background.light};
        border: 2px solid ${props => props.theme.color.border.secondary};
        border-radius: 4px;
        padding: ${props => props.theme.spacing.sm};
        padding-right: ${props => props.theme.spacing.lg};
        width: 100%;
        -webkit-transition: 0.5s;
        transition: 0.5s;
    }
    input:focus{
        outline: none;
        border-color: ${props => props.theme.color.border.primary};
    }
    input.valid{
        border-color: ${props => props.theme.color.border.valid};
    }
    input.invalid{
        border-color: ${props => props.theme.color.border.error};
    }
    p.invisible{
        display:none;
    }
    p.visible{
        display:block;
    }
`

export default FieldsetStyle