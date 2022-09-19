import React, { useState } from "react";
import { Link } from "react-router-dom";

import ItemCount from "./ItemCount";

const ItemDetail = ({ producto ,cartWidget}) => {

	const [countAdd, setCountAdd] = useState("");
	const [compra, setCompra] = useState(false);
	const onAdd = (itemAdd)=>{
		cartWidget(itemAdd);
		setCountAdd(itemAdd);
		setCompra(true);
	}

	return (
		<>
			<div className="card card--xl mx-auto">
				<img className="img img-producto img-producto--xl" src={producto.urlImg} alt="producto" />
				<div className="detalle">
					<h6>{producto.nombre}</h6>
					<p>{producto.detalle}</p>
					<b>${producto.precio}</b>
				</div>
				<div className="compra">
					{compra? <Link to="/cart" className="btn btn-verde">Terminar Compra</Link> :<ItemCount stock={producto.cantidad} initial={1} onAdd={onAdd}/>}
				</div>
			</div>
		</>
	);
}
export default ItemDetail;