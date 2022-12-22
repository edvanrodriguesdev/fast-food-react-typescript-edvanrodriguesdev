import React from "react";
import { StyledCartProduct, StyledCartProductImg, StyledCartProductDivMid, StyledCartProductName, StyledCartProductCategory, StyledCartProductButton } from "./styles"
import { useContext } from "react";
import { CartContext } from "../../provider/CartContext";

interface iCartProductProps{
    name: string;
    category: string;
    price: number;
    img: string;
    id: number;
    key: number;
}

export const CartProduct = ({ name, category, price, img, id  }: iCartProductProps) => {
const cartimage = img
const { currentSale, removeFoodToTheCart } = useContext(CartContext)

    return(
        <StyledCartProduct>
            <StyledCartProductImg><img src={cartimage} alt='products'></img></StyledCartProductImg>
            <StyledCartProductDivMid>
            <StyledCartProductName>{name}</StyledCartProductName>
            <StyledCartProductCategory>{category}</StyledCartProductCategory>
            </StyledCartProductDivMid>
            <StyledCartProductButton type="button" onClick={ () => removeFoodToTheCart(id)}>Remover</StyledCartProductButton>
        </StyledCartProduct>
    )
}

