import { createContext } from "react";
import { useState } from 'react';
export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [itemCart, setItemCart] = useState([]);
	const [cantCompra, setCantCompra] = useState(0);
	const [totalVenta, setTotalVenta] = useState(0);

	// const cartWidget = () => {
	// 	setCantCompra(itemCart.reduce((total, item) => total += item.producto.itemAdd, 0));
	// }

	// const totalCompra = () => {
	// 	setTotalVenta(itemCart.reduce((total, item) => total += item.producto.precio * item.producto.itemAdd, 0))
	// }

	const onItem = (producto) => {
		let totalItem = producto.precio * producto.itemAdd
		setItemCart([...itemCart, { ...producto, totalItem }]);
		setCantCompra(cantCompra + producto.itemAdd);
		setTotalVenta(totalVenta + totalItem);
		console.log(producto);
	}
	const deleteItem = (producto) => {
		let productoSeleccionado = itemCart.find(item => item.id === producto)
		let idItemCart = itemCart.indexOf(productoSeleccionado);
		console.log(idItemCart);
		itemCart.splice(idItemCart, 1)
		setItemCart(itemCart);
		setCantCompra(cantCompra - productoSeleccionado.itemAdd);
		setTotalVenta(totalVenta - productoSeleccionado.totalItem);
	}
	const deleteAll = () => {
		itemCart.splice(0, itemCart.length)
		setItemCart(itemCart);
		setCantCompra(0);
		setTotalVenta(0);
	}

	return (
		<CartContext.Provider value={{ cantCompra, onItem, itemCart, deleteItem, deleteAll, totalVenta }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;