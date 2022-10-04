import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartDetail = (props) => {
	const cart = useContext(CartContext);
	let logoNav = "./mundocupcake-02.png";
	return (
		<>
			{cart.cantCompra === 0 ? <div className="container text-center">
				<img className="p-3" src={logoNav} alt={"Mundo Cupcake"} />
				<h2>El carrito esta vacio</h2>
				<Link to="/" className="btn btn-verde m-3">Ir al inicio</Link>
			</div> :
				<div className="container-fluid">
					<div className="row m-5">
						<div className="table-responsive">
							<table className="table">
								<thead>
									<tr>
										<th className="col"></th>
										<th className="col">Producto</th>
										<th className="col">Precio Unitario</th>
										<th className="col">Cantidad compra</th>
										<th className="col">Total</th>
										<th className="col"></th>
									</tr>
								</thead>
								<tbody>
									{cart.itemCart.map(item => <tr key={item.id}><td><img className="img-thumbnail" src={item.img} alt={item.nombre} /></td><td>{item.nombre}</td><td>{item.precio}</td><td>{item.itemAdd}</td><td>{item.totalItem}</td><td><input className="btn btn-verde" type="button" value="Eliminar" onClick={() => cart.deleteItem(item.id)} /></td></tr>)}
								</tbody>
								<tfoot>
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>Total compra</td>
										<td>$ {cart.totalVenta}</td>
									</tr>
								</tfoot>
							</table>
						</div>
						{props.finalizaCompra || <Link to="/checkout" className="btn btn-verde mt-3">Finalizar compra</Link>}
						{props.finalizaCompra || <input className="btn btn-verde mt-3" type="button" value="Eliminar todos los productos" onClick={() => cart.deleteAll()} />}
					</div>
				</div>
			}
		</>

	);
}
export default CartDetail;