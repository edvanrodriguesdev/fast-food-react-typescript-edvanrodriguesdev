import React from "react";


import { StyledNoCard, StyledNoCardEmpty, StyledNoCardAdd } from './styles'


export const NoCard = () => {
    return(
        <StyledNoCard>
            <StyledNoCardEmpty>Sua sacola está vazia</StyledNoCardEmpty>
            <StyledNoCardAdd>Adicione itens</StyledNoCardAdd>
        </StyledNoCard>
    )
}