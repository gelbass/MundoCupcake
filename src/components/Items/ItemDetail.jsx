import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto, itemCart, onItem }) => {
	// let url = "/img/"+producto.img;
	const [isInCart, setIsInCart] = useState(false);
	const onAdd = (itemAdd) => {
		itemCart === [{}] || itemCart.includes(itemCart.find(item => item.id === producto.id)) ?  Swal.fire({
			icon: 'error',
			title: 'ERROR',
			text: 'El producto ya se encuentra en el carrito',
		}):onItem({ ...producto, itemAdd });
		setIsInCart(true);
	}

	return (
		<>
			<div className="cardProducto card--xl mx-auto">
				<img className="img img-producto" src={producto.img} alt="producto" />
				<div className="detalle">
					<h5 className="detalle--titulo">{producto.nombre}</h5>
					<h6>{producto.descripcion}</h6>
					<div className="">
						<h6 className="detalle--precio">${producto.precio}</h6>
						{isInCart || <ItemCount stock={producto.cantidad} initial={1} onAdd={onAdd} />}
					</div>
				</div>
				<div className="compra">
					{isInCart && <Link to="/carrito" className="btn btn-verde">Terminar Compra</Link>}
					{isInCart && <Link to="/" className="btn btn-verde">Comprar algo mas</Link>}
				</div>
			</div>
		</>
	);
}
export default ItemDetail;