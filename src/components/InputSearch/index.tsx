import React, { useState } from "react";
import { useContext } from "react";
import { StyledInputSearchButton, StyledInputSearch, StyledInputSearchInput } from "./styles"
import { CartContext } from "../../provider/CartContext";


export const InputSearch = () => {
  const { filteredProducts, setFilteredProducts, showProducts, products } = useContext(CartContext)
  const [textInput, setTextInput] = useState("")
    
    const search = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        const newProducts = products.filter((product) => product.name.toLowerCase().includes(textInput.toLowerCase()))
        setFilteredProducts(newProducts)
      }
    return(
            <StyledInputSearch onSubmit={search}>
            <StyledInputSearchInput placeholder="Digitar Pesquisa" value={textInput}
            onChange={(event:any) => setTextInput(event.target.value) }></StyledInputSearchInput>
            <StyledInputSearchButton type="submit" >Pesquisar</StyledInputSearchButton>
            </StyledInputSearch>
    )
}