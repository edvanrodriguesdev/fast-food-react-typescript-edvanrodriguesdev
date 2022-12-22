import React from "react";
import LogoImg from "../../assets/img/logo.svg"
import { StyledLogo } from "./styles"

export const Logo = () => {
    
    return(
        <StyledLogo>
<img src={LogoImg} alt="logo"></img>
        </StyledLogo>
    )
}