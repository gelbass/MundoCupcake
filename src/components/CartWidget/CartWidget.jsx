import React from "react";

const CartWidget = (props) => {
  return (
    <div className="cartWidget">
      <i className="fa-solid fa-cart-shopping" />
      <p>{props.valor}</p>
    </div>
  );
};
export default CartWidget;