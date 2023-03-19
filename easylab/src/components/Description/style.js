import styled from "styled-components";

const DescStyle = styled.section`
    padding: ${props => props.theme.spacing.md};
    margin: 0 auto;
    border: 5.5px solid ${props => props.theme.color.border.secondary};
    box-sizing: border-box;
    width: 90%;
    min-height: 150px;

    h1{
        font-size: ${props => props.theme.typography.size.lg};
        font-weight: ${props => props.theme.typography.weight.extraBold};
        margin-bottom: ${props => props.theme.spacing.sm};
    }
    p{
        font-size: ${props => props.theme.typography.size.md};
        margin-bottom: ${props => props.theme.spacing.sm};
    }

    span{
        display: block;
        font-size: ${props => props.theme.typography.size.rg};
        text-align: center;
    }
`

export default DescStyle