import React from "react";
import Card from "../Card/Card";
// import CartWidget from "../CartWidget/CartWidget";

const producto = { id: "CCK-OREO", nombre: "Cupcake de Oreo", cantidad: 10 };
const ItemListContainer = () => {
  return (
    <>
      <Card stock = {producto.cantidad} initial={"1"}/>
    </>
  );
}

export default ItemListContainer;