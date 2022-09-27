import React from "react";
import { Link } from "react-router-dom";

const Item = ({id,nombre,img, stock, precio }) => {
	return (
		<>
			<div className="card card--md">
				<img className="img img-producto" src={img} alt="producto" />
				<div className="detalle">
					<h6>{nombre}</h6>
					<b>Precio: ${precio} </b>
					<p>Cantidad disponible: {stock} </p>
				</div>
				<div className="compra">
					<Link to={"/producto/"+id} className="btn btn-verde" >Comprar</Link>
				</div>
			</div>
		</>
	);
}
export default Item;