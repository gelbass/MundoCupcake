import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import CartDetail from "./CartDetail";

const Checkout = () => {
  const cart = useContext(CartContext);
  const [clienteForm, setClienteForm] = useState({
    nombreApellido: "",
    email: "",
    telefono: ""
  });
  let logoNav = "./mundocupcake-02.png";

  const validarText = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    const values = {
      ...clienteForm,
      [name]: value,
    };
    setClienteForm(values)
  }

  const generarPedido = () => {
    const date = new Date();
    const fechaPedido = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const orden = {cliente:clienteForm, Fecha:fechaPedido,total:cart.totalVenta,productos:cart.itemCart};
    cart.checkout(orden);
  }

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
                  <label htmlFor="nombreApellido" className="form-label">Nombre y Apellido</label>
                  <input type="text" className="form-control" id="nombreApellido" placeholder="Nombre y Apellido" onChange={validarText} name="nombreApellido" value={clienteForm.nombreApellido.toUpperCase()} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={validarText} name="email" value={clienteForm.email} />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono</label>
                  <input type="text" className="form-control" id="telefono" placeholder="Ingrese número telefónico" onChange={validarText} name="telefono" value={clienteForm.telefono} />
                </div>
              </form>
            </div>
            <div className="col">
              <CartDetail finalizaCompra={true} />
            </div>
            <input className="btn btn-verde mt-3" type="submit" value="Realizar pago" onClick={() => generarPedido()} />
          </div>
        </div>
      </>
      }
    </>
  );
}

export default Checkout;