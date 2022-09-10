import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
	return (
		<div className="listProductos">
			{productos.map(item => <Item key={item.id} nombre={item.nombre} urlImg={item.urlImg} stock={item.cantidad} />)}
		</div>
	);
}


export default ItemList;