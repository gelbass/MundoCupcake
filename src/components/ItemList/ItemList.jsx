import React from "react";
import Card from "../Item/Item";

const ItemList = ({ productos }) => {
	return (
		<div className="listProductos">
			{productos.map(item => <Card nombre={item.nombre} stock={item.cantidad} initial={"1"} />)}
		</div>
	);
}

export default ItemList;