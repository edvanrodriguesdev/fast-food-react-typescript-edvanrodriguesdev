import React from "react";
import { useContext } from "react";
import { CartContext } from "../../provider/CartContext";
import { StyledCardTotal, StyledCardTotalDivTop, StyledCardTotalTotal, StyledCardTotalPrice, StyledCardTotalButton } from "./styles"

interface iCartTotalProps{
    totalValue: number;
}

export const CartTotal = ({ totalValue }:iCartTotalProps) => {
    const { emptyCart } = useContext(CartContext)


    
    return(
        <StyledCardTotal>
            <StyledCardTotalDivTop>
<StyledCardTotalTotal>Total</StyledCardTotalTotal>
<StyledCardTotalPrice>R$ {totalValue.toFixed(2)}</StyledCardTotalPrice>
            </StyledCardTotalDivTop>
            <StyledCardTotalButton type="button" onClick={ () => emptyCart()}>Remover todos</StyledCardTotalButton>
        </StyledCardTotal>
    )
}