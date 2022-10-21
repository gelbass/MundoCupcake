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
					<div className="container ">
						<h2 className="text-center m-5">TU DULCE COMPRA</h2>
						{cart.itemCart.map(item => <div className="container container__carrito" key={item.id}><img className="img-thumbnail imgCarrito" src={item.img} alt={item.nombre} /><h3 className="titulo--carrito">{item.nombre}</h3> <div className="detalle--carrito"><strong>Precio: </strong>${item.precio}<strong>Cantidad: </strong>{item.itemAdd}<strong>Total: </strong>${item.totalItem}</div><div className="opcion--carrito"><input className="btn btn-verde" type="button" value="Eliminar" onClick={() => cart.deleteItem(item.id)} /></div></div>)}
					</div>
					<div class="container">
						<hr />
						<h3>Total compra: ${cart.totalVenta}</h3>
						<div className="d-flex justify-contex-center botones">
							{props.finalizaCompra || <Link to="/checkout" className="btn btn-verde mt-3 m-2">Finalizar compra</Link>}
							{props.finalizaCompra || <input className="btn btn-verde mt-3 m-2" type="button" value="Eliminar todos los productos" onClick={() => cart.deleteAll()} />}
						</div>
					</div>
				</div>
			}
		</>

	);
}
export default CartDetail;