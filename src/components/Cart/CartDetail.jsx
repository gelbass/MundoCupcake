import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartDetail = () => {
	const cart = useContext(CartContext);
	console.log(cart.itemCart);
	return (
		<div className="container">
			<table className="table">
				<thead>
					<tr>
						<th className="col"></th>
						<th className="col">Producto</th>
						<th className="col">Cantidad compra</th>
						<th className="col">Precio</th>
					</tr>
				</thead>
				<tbody>
					{cart.itemCart.map(item=><tr key={item}><td><img className="img-thumbnail" src={item.producto.urlImg} alt={item.producto.nombre} /></td><td>{item.producto.nombre}</td><td>{item.producto.itemAdd}</td><td>{item.producto.precio}</td></tr>)}
				</tbody>
			</table>
		</div>
	);
}
export default CartDetail;