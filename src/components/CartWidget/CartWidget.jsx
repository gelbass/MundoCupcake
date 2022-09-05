import React from "react";

const CartWidget = ({cantidad}) => {
  return (
    <div className="cartWidget">
      <i className="fa-solid fa-cart-shopping" />
      <p>{cantidad}</p>
    </div>
  );
};
export default CartWidget;