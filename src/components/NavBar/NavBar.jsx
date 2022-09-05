import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  let url = "#";
  let logoNav = "./mundocupcake-03.png";
  
  return (
      <nav className="navbar navbar-expand-lg bg-menu">
        <div className="container-fluid">
          <a className="navbar-brand" href={url}><img src={logoNav} alt="LogoMC" className="logo-nav" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={url}>Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={url}>Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={url}>Productos</a>
              </li>
            </ul>
          </div>
            <CartWidget cantidad={"0"} />
        </div>
      </nav>
  );
};

export default NavBar;
