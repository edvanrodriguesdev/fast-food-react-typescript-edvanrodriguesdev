import React from "react";
import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";

interface iCartProviderProps{
    children: React.ReactNode;
  }

export const Providers = ({ children }: iCartProviderProps) => {

    return(
    <UserProvider>
        <CartProvider>
        {children}
        </CartProvider>
    </UserProvider>
    )
}