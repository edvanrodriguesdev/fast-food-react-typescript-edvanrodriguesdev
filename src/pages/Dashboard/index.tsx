import React, { useContext, useEffect } from "react";
import { StyledContainerSite } from "./styles"
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductsList";
import { Cart } from "../../components/Cart";
import { CartContext } from "../../provider/CartContext";
import { api } from "../../services/api";
import { AxiosError } from "axios";

interface iRequestError{
  error: string;
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

export const Dashboard = () => {
  const { setProducts } = useContext(CartContext)
  const token = localStorage.getItem("@TOKEN");

    useEffect(() => {
        const listProducts = async () => {
            try {
              const response = await api.get<iProducts[]>("products", {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              setProducts(response.data)
            } catch (error) {
              const currentError = error as AxiosError<iRequestError>
              console.log(currentError.response?.data.error)
          };
        }  
        listProducts() 
    }, [])


    return(
        <>
        <Header></Header>
        <StyledContainerSite>
        <ProductsList></ProductsList>
        <Cart></Cart>
        </StyledContainerSite>
        </>
    )
}

