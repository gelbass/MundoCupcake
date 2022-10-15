import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto, itemCart, onItem }) => {
	// let url = "/img/"+producto.img;
	const [isInCart, setIsInCart] = useState(false);
	const onAdd = (itemAdd) => {
		itemCart ===[{}] && itemCart.includes(itemCart.find(item => item.producto.id === producto.id)) ? Swal.fire({
			icon: 'error',
			title: 'ERROR',
			text: 'El producto ya se encuentra en el carrito',
		}) : onItem({ ...producto, itemAdd });
		setIsInCart(true);
	}

	return (
		<>
			<div className="card card--xl mx-auto">
				<img className="img img-producto img-producto--xl" src={producto.img} alt="producto" />
				<div className="detalle">
					<h5 className="detalle--titulo">{producto.nombre}</h5>
					<h6>{producto.descripcion}</h6>
					<h6 className="detalle--precio">${producto.precio}</h6>
				</div>
				<div className="compra">
					{isInCart ? <Link to="/carrito" className="btn btn-verde">Terminar Compra</Link> : <ItemCount stock={producto.cantidad} initial={1} onAdd={onAdd} />}
				</div>
			</div>
		</>
	);
}
export default ItemDetail;