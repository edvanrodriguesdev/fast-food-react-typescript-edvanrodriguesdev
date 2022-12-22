import { CartProduct } from "../CartProduct"
import { StyledCart, StyledCartTitle, StyledCartUl } from "./styles"
import { CartTotal } from "../CartTotal"
import { NoCard } from "../NoCard"
import { useContext } from "react";
import { CartContext } from "../../provider/CartContext";



export const Cart = () => {
    const { currentSale, removeFoodToTheCart, emptyCart } = useContext(CartContext)

    
    const totalValue = currentSale.reduce((oldValue, curValue) => {
       
            return curValue.price + oldValue
        }, 0)
        
        return(
            <StyledCart>
    <StyledCartTitle>Carrinho de compras</StyledCartTitle>
    <StyledCartUl>
        {
            currentSale?.map((item) => <CartProduct key={+item.id} id={+item.id} img={item.img} name={item.name} category={item.category} 
            price={item.price} />)
        }
        {
            currentSale.length < 1?(<NoCard />):''
        }
    </StyledCartUl>
<CartTotal totalValue={totalValue} ></CartTotal>
</StyledCart>
    )
}
