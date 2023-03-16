import React from 'react';
import FooterStyle from "./style"
import {HiCalculator} from 'react-icons/hi'

function Footer(){
    return(
        <FooterStyle>
            <HiCalculator/>
            <span>Todos os direitos reservados</span>
        </FooterStyle>
    )
}

export default Footer