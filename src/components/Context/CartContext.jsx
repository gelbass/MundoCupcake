import React from "react";
import { createContext } from "react";

export const CartContext = createContext();


const Provider = ({children}) => {
    const carrito = ()=>{
        console.log("carrito");
    }
    return (
        <CartContext.Provider value={carrito}>
            {children}
        </CartContext.Provider>
    );
}

export default Provider;