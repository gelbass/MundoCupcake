import React, { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ItemDetail from "../Items/ItemDetail";
import Loading from "../Loading";

const ItemDetailContainer = ({productos}) => {
	const [loading, setLoading] = useState(true);
	const {id} = useParams();
	const cart = useContext(CartContext);
	const producto = productos.filter(item => item.id === id);
	setTimeout(() => {
		setLoading(false);
	}, 2000);
	return (
		<>
			{loading ? <Loading /> : <ItemDetail producto={producto[0]} itemCart={cart.itemCart} onItem={cart.onItem}/>}
		</>
	);
}
export default ItemDetailContainer;