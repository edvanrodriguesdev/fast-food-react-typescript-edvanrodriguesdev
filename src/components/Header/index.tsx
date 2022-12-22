import React from "react";
import { useContext } from "react";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderDiv,
  StyledHeaderIcons,
  StyledHeaderIconCount,
  StyledHeaderLogout,
} from "./styles";
import { Logo } from "../Logo";
import { InputSearch } from "../InputSearch";
import { CartContext } from "../../provider/CartContext";
import CartImg from "../../assets/img/cart.svg";
import LogoutImg from "../../assets/img/logout.svg";
import { UserContext } from "../../provider/UserContext";

export const Header = () => {
  const {
    filteredProducts,
    setFilteredProducts,
    showProducts,
    products,
    currentSale,
  } = useContext(CartContext);
  const { userLogout } = useContext(UserContext);

  const countCart = currentSale.length
  

  return (
    <>
      <StyledHeader>
        <StyledHeaderContainer>
          <Logo />
          <StyledHeaderDiv>
            <InputSearch />
            <StyledHeaderIcons>
              <StyledHeaderIconCount>{countCart}</StyledHeaderIconCount>
              <img src={CartImg} alt="carrinho"></img>
              <StyledHeaderLogout type="button" onClick={() => userLogout()}>
                <img src={LogoutImg} alt="carrinho"></img>
              </StyledHeaderLogout>
            </StyledHeaderIcons>
          </StyledHeaderDiv>
        </StyledHeaderContainer>
      </StyledHeader>
    </>
  );
};
