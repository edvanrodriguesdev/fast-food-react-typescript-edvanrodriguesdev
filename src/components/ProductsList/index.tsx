import React from "react";
import { useContext } from "react";
import { Product } from "../Product";
import { StyledProductsList } from "./styles";
import { CartContext } from "../../provider/CartContext";
import { InputSearch } from "../InputSearch";

export const ProductsList = () => {
  const { filteredProducts, products, handleClick } = useContext(CartContext);

  return (
    <StyledProductsList>
      {filteredProducts.length === 0
        ? products?.map((list) => (
            <Product
              key={list.id}
              name={list.name}
              category={list.category}
              price={list.price}
              img={list.img}
              id={+list.id!}
            />
          ))
        : filteredProducts.map((list) => (
            <Product
              key={list.id}
              name={list.name}
              category={list.category}
              price={list.price}
              img={list.img}
              id={+list.id!}
            />
          ))}
    </StyledProductsList>
  );
};
