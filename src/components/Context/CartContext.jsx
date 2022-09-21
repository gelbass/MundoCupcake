import { useContext } from "react";
import { createContext } from "react";
import { useState } from 'react';
import { ProductosContext } from "./ProductosContext";
export const CartContext = createContext();


const CartProvider = ({ children }) => {
	const [itemCart, setAddToCart] = useState([]);

	const onItem = (producto) =>{
		setAddToCart([...itemCart,{producto}]);
		setCantCompra(itemCart.length+1);
	}

	const [cantCompra, setCantCompra] = useState("");
	const cartWidget = () => {
		setCantCompra(itemCart.length+1);
	}

	return (
		<CartContext.Provider value={{ cantCompra, cartWidget, onItem, itemCart}}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;