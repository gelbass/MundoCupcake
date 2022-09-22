import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartDetail = () => {
	const cart = useContext(CartContext);
	
	return (
		<div className="container">
			<table className="table m-4">
				<thead>
					<tr>
						<th className="col"></th>
						<th className="col">Producto</th>
						<th className="col">Cantidad compra</th>
						<th className="col">Precio</th>
						<th className="col"></th>
					</tr>
				</thead>
				<tbody>
					{cart.itemCart.map(item=><tr key={item.producto.id}><td><img className="img-thumbnail" src={item.producto.urlImg} alt={item.producto.nombre} /></td><td>{item.producto.nombre}</td><td>{item.producto.itemAdd}</td><td>{item.producto.precio*item.producto.itemAdd}</td><td><input className="btn btn-verde" type="button" value="Eliminar" onClick={() =>cart.deleteItem(item.producto.id)}/></td></tr>)}
				</tbody>
				<tfoot>
					<tr>
						<td></td>
						<td></td>
						<td>Total compra</td>
						<td>$ {cart.totalVenta}</td>
						<td><input className="btn btn-verde" type="button" value="Finalizar compra" onClick={() =>cart.deleteItem()}/></td>
					</tr>
				</tfoot>
			</table>
			<input className="btn btn-verde" type="button" value="Eliminar todos los productos" onClick={() =>cart.deleteAll()}/>
		</div>
	);
}
export default CartDetail;