import React from "react";

const Item = ({ nombre,urlImg, stock, initial }) => {
	return (
		<>
			<div className="card">
				<img className="img img-producto" src={urlImg} alt="producto" />
				<div className="detalle">
					<h6>{nombre}</h6>
					<p>Cantidad disponible: {stock} </p>
				</div>
				<div className="compra">
					<input type="button" className="btn btn-verde" value="Comprar" />
				</div>
			</div>
		</>
	);
}
export default Item;