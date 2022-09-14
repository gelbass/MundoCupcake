import React from "react";
import Item from "./Item";

const ItemList = ({ productos , categoria}) => {
	console.log(categoria);
	const listadoProductos = categoria ? productos.filter(valor => valor.categoria === categoria) : productos;
	console.log(listadoProductos);
	return (
		<div className="listProductos">
			{listadoProductos.map(item => <Item key={item.id} id={item.id} nombre={item.nombre} urlImg={item.urlImg} stock={item.cantidad} precio={item.precio}/>)}
		</div>
	);
}


export default ItemList;