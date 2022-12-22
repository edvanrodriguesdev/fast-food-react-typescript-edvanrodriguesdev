import React from "react";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";


interface iCartProviderProps{
  children: React.ReactNode;
}

interface iProducts{
  map(arg0: (list: { id: React.Key | null | undefined; name: string; category: string; price: number; img: string; }) => JSX.Element): React.ReactNode;
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  startswith: () => void;
}





interface iCartContext{
  filteredProducts: iProducts[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  showProducts: () => void;
  products: iProducts[];
  handleClick: (productId: number) => void;
  currentSale: iProducts[];
  removeFoodToTheCart: (productId: number) => void;
  emptyCart: () => void;
  setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
}

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartProviderProps) => {
  const [products, setProducts] = useState([] as iProducts[]);
  const [filteredProducts, setFilteredProducts] = useState([] as iProducts[]);
  const [currentSale, setCurrentSale] = useState([] as iProducts[]);
  


  

  function showProducts() {
    const searchProducts = products.filter((item) =>
      item.startswith()
    );

    setProducts(searchProducts);
  }

  function handleClick(productId: number) {
   
    const productList:iProducts | any = products.find((item) => item.id === productId);

    if (!currentSale.some((current:iProducts) => current.id === productId)) {
      setCurrentSale([...currentSale, productList]);
      return toast.success("Item adicionado na sacola!");
    }
    return toast.error("Esse item já está na sacola!");
  }

  function removeFoodToTheCart(productId: number) {
    const newList = currentSale.filter((item) => item.id !== productId);

    setCurrentSale(newList);
  }

  function emptyCart() {
    setCurrentSale([]);
    toast.info("Sacola vazia");
  }

  return (
    <CartContext.Provider
      value={{
        filteredProducts,
        setFilteredProducts,
        showProducts,
        products,
        handleClick,
        currentSale,
        removeFoodToTheCart,
        emptyCart,
        setProducts
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
