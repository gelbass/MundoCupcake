import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto, initial}) => {
	return (
		<>
			<div className="card">
				<img className="img img-producto" src={producto.urlImg} alt="producto" />
				<div className="detalle">
					<h6>{producto.nombre}</h6>
					<p>{producto.descripcion}</p>
				</div>
				<div className="compra">
					<input type="button" className="btn btn-verde" value="Comprar" />
					<ItemCount stock={producto.cantidad} initial={initial} />
				</div>
			</div>
		</>
	);
}
export default ItemDetail;