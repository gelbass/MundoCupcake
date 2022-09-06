import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ nombre, stock, initial }) => {
	
	return (
		<>
			<div className="card">
				<img className="img img-producto" src="./CupCake_OREO.jpg" alt="producto" />
				<div className="detalle">
					<h6>{nombre}</h6>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
				</div>
				<div className="compra">
					<ItemCount stock={stock} initial={initial}/>
				</div>
			</div>
		</>
	);
}
export default Item;