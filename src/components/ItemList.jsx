import React from "react";
import Item from "./Item";

const ItemList = ({ productos , categoria}) => {
	const listadoProductos = categoria ? productos.filter(valor => valor.categoria === categoria) : productos;
	return (
		<div className="listProductos">
			{listadoProductos.map(item => <Item key={item.id} id={item.id} nombre={item.nombre} urlImg={item.urlImg} stock={item.cantidad} precio={item.precio}/>)}
		</div>
	);
}


export default ItemList;