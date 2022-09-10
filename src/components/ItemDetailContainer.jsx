import React from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ producto }) => {
	// console.log(producto)
	return (
		<>
			<ItemDetail producto={producto} initial={"1"} />
		</>
	);
}
export default ItemDetailContainer;