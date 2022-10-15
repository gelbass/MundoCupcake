import React from "react";

const CartWidget = ({cantidad}) => {
  return (
    <div className="cartWidget">
      <i className="bi bi-cart" />
      <p>{cantidad}</p>
    </div>
  );
};
export default CartWidget;