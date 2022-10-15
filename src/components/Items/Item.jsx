import React from "react";
import { Link } from "react-router-dom";

const Item = ({id,nombre,img, stock, precio }) => {
	return (
		<>
			<div className="cards card--md">
				<img className="img img-producto" src={img} alt="producto" />
				<div className="card__detalle">
					<h5 className="detalle--titulo">{nombre}</h5>
					<h6 className="detalle--precio">$ {precio} </h6>
					<h6 className="detalle--cantidad">Cantidad disponible: {stock} </h6>
				</div>
				<div className="compra">
					<Link to={"/producto/"+id} className="btn btn-verde" >Comprar</Link>
				</div>
			</div>
		</>
	);
}
export default Item;