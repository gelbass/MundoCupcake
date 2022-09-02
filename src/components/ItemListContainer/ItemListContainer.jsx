import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const ItemListContainer = (props) => {
  return (
    <CartWidget valor={props.cantidad}/>
  );
}

export default ItemListContainer;