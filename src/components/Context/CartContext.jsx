import { createContext } from "react";
import { useState } from 'react';
export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [itemCart, setItemCart] = useState([]);
	const [cantCompra, setCantCompra] = useState(0);
	const [totalVenta, setTotalVenta] = useState(0);

	const cartWidget = () => {
		setCantCompra(itemCart.reduce((total, item) => total += item.producto.itemAdd, 0));
	}

	const totalCompra = () => {
		setTotalVenta(itemCart.reduce((total, item) => total += item.producto.precio * item.producto.itemAdd, 0))
	}

	const onItem = (producto) => {
		setItemCart([...itemCart, { producto }]);;
		console.log(itemCart[0]);
		totalCompra()
		cartWidget();
	}
	const deleteItem = (producto) => {
		console.log("entro1");
		let idItemCart = itemCart.indexOf(itemCart.find(item => item.producto.id === producto));
		console.log(idItemCart);
		itemCart.splice(idItemCart, 1)
		setItemCart(itemCart);
		cartWidget();
		totalCompra();
	}
	const deleteAll = () => {
		console.log("entro2");
		itemCart.splice(0, itemCart.length)
		setItemCart(itemCart);
		setCantCompra(0);
		setTotalVenta(0);
	}

	return (
		<CartContext.Provider value={{ cantCompra, cartWidget, onItem, itemCart, deleteItem, deleteAll, totalVenta, totalCompra }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;