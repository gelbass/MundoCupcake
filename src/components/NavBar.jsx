import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  let url = "#";
  let logoNav = "./mundocupcake-03.png";

  return (
    <nav className="navbar navbar-expand-lg bg-menu">
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
            <li className="nav-item">
              <Link className="nav-link" to={url}>Nosotros</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/cupcakes"}>Cupcake's</Link></li>
                <li><Link className="dropdown-item" to={"/tortas"}>Tortas</Link></li>
                <li><Link className="dropdown-item" to={"/galletas"}>Galletas</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget cantidad={"0"} />
      </div>
    </nav>
  );
};

export default NavBar;
