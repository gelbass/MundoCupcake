import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./Cart/CartWidget";
import { CartContext } from "./Context/CartContext";

const NavBar = (props) => {

  const cart = useContext(CartContext);
  let url = "#";
  let logoNav = "./mundocupcake-03.png";

  const categorias = []

  props.productos.forEach((elemento) => {
    if (!categorias.includes(elemento.categoria)) {
      categorias.push(elemento.categoria);
    }
  });
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-menu">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}><img src={logoNav} alt="LogoMC" className="logo-nav" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>Inicio</Link>
            </li>
            <li className="nav-item dropdown">
              <a href={url} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu">
                {categorias.map(item => (<li key={item}><Link className="dropdown-item" to={`/${item}`}>{item.toUpperCase()}</Link></li>))}
              </ul>
            </li>
          </ul>
        </div>
        {cart.cantCompra === 0 ? <CartWidget cantidad={cart.cantCompra} /> : <Link className="link" to="/carrito"> <CartWidget cantidad={cart.cantCompra} /></Link>}
      </div>
    </nav>
  );
};

export default NavBar;
