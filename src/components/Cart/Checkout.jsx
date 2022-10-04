import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import CartDetail from "./CartDetail";

const Checkout = () => {
  const cart = useContext(CartContext);
  let logoNav = "./mundocupcake-02.png";
  return (
    <>
      {cart.cantCompra === 0 ? <div className="container text-center">
        <img className="p-3" src={logoNav} alt={"Mundo Cupcake"} />
        <h2>El carrito esta vacio</h2>
        <Link to="/" className="btn btn-verde m-3">Ir al inicio</Link>
      </div> : <>
        <h2 className="text-center m-5">Estás a un paso de entrar en un mundo de sabores!</h2>
        <div className="container-fluid">
          <div className="row m-5">
            <div className="col-lg-4">
              <form >
                <div className="mb-3">
                  <label for="nombreApellido" className="form-label">Nombre y Apellido</label>
                  <input type="text" className="form-control" id="nombreApellido" placeholder="Nombre y Apellido" />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label for="telefono" className="form-label">Teléfono</label>
                  <input type="texto" className="form-control" id="telefono" placeholder="name@example.com" />
                </div>
              </form>
            </div>
            <div className="col">
              <CartDetail finalizaCompra={true} />
            </div>
            <input className="btn btn-verde mt-3" type="button" value="Realizar pago" onClick={() => cart.checkout({productos: cart.itemCart,nombre:"pepe", email:"pepe@qwe.com",telefono:"098123132"})} />
          </div>
        </div>
      </>
      }
    </>
  );
}

export default Checkout;