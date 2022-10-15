import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { createContext } from "react";
import { useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [itemCart, setItemCart] = useState([]);
	const [cantCompra, setCantCompra] = useState(0);
	const [totalVenta, setTotalVenta] = useState(0);
	const [usuario, setUsuario] = useState("");
  
	const onItem = (producto) => {
		let totalItem = producto.precio * producto.itemAdd
		setItemCart([...itemCart, { ...producto, totalItem }]);
		setCantCompra(cantCompra + producto.itemAdd);
		setTotalVenta(totalVenta + totalItem);
	}

	const deleteItem = (producto) => {
		let productoSeleccionado = itemCart.find(item => item.id === producto)
		let idItemCart = itemCart.indexOf(productoSeleccionado);
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

	const checkout = (compra) =>{
		const db = getFirestore();
    const compraDb = collection(db, "ventas");
    addDoc(compraDb,compra).then(({id}) => {
			Swal.fire({
				icon: 'success',
				title: 'Compra Exitosa',
				text: `${compra.cliente.nombreApellido.toUpperCase()}. Su ID de compra es: ${id}`,
			});
			deleteAll();
		});
	}

	return (
		<CartContext.Provider value={{ cantCompra, onItem, itemCart, deleteItem, deleteAll, totalVenta,checkout}}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;