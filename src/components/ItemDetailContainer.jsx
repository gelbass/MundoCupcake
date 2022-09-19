import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ productos ,cartWidget}) => {
	const {id} = useParams();
	const producto = productos.filter(item => item.id === id);
	return (
		<>
			<ItemDetail producto={producto[0]} cartWidget={cartWidget} />
		</>
	);
}
export default ItemDetailContainer;