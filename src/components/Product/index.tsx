import React from "react";
import { useContext } from "react";
import { CartContext } from "../../provider/CartContext";
import { StyledProduct, StyledProductImg, StyledProductName, StyledProductCategory, StyledProductPrice, StyledProductButton } from "./styles"


interface iProductProps{
    name: string;
    category: string;
    price: number;
    img: string;
    id: number;
}

export const Product = ({ name, category, price, img, id}: iProductProps) => {
    const { handleClick } = useContext(CartContext)

    const image = img
    return(
        <StyledProduct>
            <StyledProductImg>
            <img src={image} alt='products'></img>
            </StyledProductImg>
            <StyledProductName>{name}</StyledProductName>
            <StyledProductCategory>{category}</StyledProductCategory>
            <StyledProductPrice>R$ {price.toFixed(2)}</StyledProductPrice>
            <StyledProductButton type="button" onClick={ () => handleClick(id) }>Adicionar</StyledProductButton>
        </StyledProduct>
    )
}