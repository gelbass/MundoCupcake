import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ItemDetail from "../Items/ItemDetail";

const ItemDetailContainer = ({productos}) => {
	const {id} = useParams();
	const cart = useContext(CartContext);
	const producto = productos.filter(item => item.id === id);
	return (
		<>
			<ItemDetail producto={producto[0]} itemCart={cart.itemCart} onItem={cart.onItem}/>
		</>
	);
}
export default ItemDetailContainer;