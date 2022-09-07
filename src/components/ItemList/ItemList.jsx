import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
	return (
		<div className="listProductos">
			{productos.map(item => <Item key={item.id} nombre={item.nombre} stock={item.cantidad} initial={"1"} />)}
		</div>
	);
}


export default ItemList;