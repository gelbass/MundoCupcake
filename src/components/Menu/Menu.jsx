function Header() {
  let url = "#";
  let logoNav = "./mundocupcake-03.png";
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-menu">
        <div className="container-fluid">
          <a className="navbar-brand" href={url}><img src={logoNav} alt="LogoMC" className="logo-nav"/></a>
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
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-verde" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
