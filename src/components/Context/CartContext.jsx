import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { createContext } from "react";
import { useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [itemCart, setItemCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
	const [cantCompra, setCantCompra] = useState(0);
	const [totalVenta, setTotalVenta] = useState(0);
	// const [usuario, setUsuario] = useState("");

	const cargarDataCarrito = () => {
		itemCart.forEach(item => {
			let totalItem = item.precio * item.itemAdd
			setCantCompra(cantCompra + item.itemAdd);
			setTotalVenta(totalVenta + totalItem)
		});
	}

	const onItem = (producto) => {
		let totalItem = producto.precio * producto.itemAdd
		setItemCart([...itemCart, { ...producto, totalItem }]);
		setCantCompra(cantCompra + producto.itemAdd);
		setTotalVenta(totalVenta + totalItem);
		const carritoStorage = [...itemCart, { ...producto, totalItem }]
		localStorage.setItem('cart', JSON.stringify(carritoStorage));
	}

	const deleteItem = (producto) => {
		let productoSeleccionado = itemCart.find(item => item.id === producto)
		let idItemCart = itemCart.indexOf(productoSeleccionado);
		itemCart.splice(idItemCart, 1)
		setItemCart(itemCart);
		setCantCompra(cantCompra - productoSeleccionado.itemAdd);
		setTotalVenta(totalVenta - productoSeleccionado.totalItem);
		localStorage.setItem('cart', JSON.stringify(itemCart));
	}

	const deleteAll = () => {
		itemCart.splice(0, itemCart.length)
		setItemCart(itemCart);
		setCantCompra(0);
		setTotalVenta(0);
		localStorage.clear();
	}

	const checkout = (compra) => {
		const db = getFirestore();
		const compraDb = collection(db, "ventas");
		addDoc(compraDb, compra).then(({ id }) => {
			Swal.fire({
				icon: 'success',
				title: 'Compra Exitosa',
				text: `${compra.cliente.nombreApellido.toUpperCase()}. Su ID de compra es: ${id}`,
			});
			deleteAll();
		});
	}
	useEffect(() => {
		localStorage.getItem('cart') && cargarDataCarrito();
	}, []);
	return (
		<CartContext.Provider value={{ cantCompra, onItem, itemCart, deleteItem, deleteAll, totalVenta, checkout }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;