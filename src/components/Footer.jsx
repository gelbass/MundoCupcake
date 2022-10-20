import React from "react";

const Footer = ()=>{
  let logoNav = "./mundocupcake-02.png";
  return(
    <>
      <div className="footer">
      <img className="p-3" src={logoNav} alt={"Mundo Cupcake"} />
        <h3 className="text-center">UN MUNDO DE SABORES</h3>
        <strong>Elaborado por Germán Lacruz</strong>
      </div>
    </>
  );
};

export default Footer;