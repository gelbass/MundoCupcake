import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const CartWidget = (props) => {
    return (
        <div className="cartWidget">
            <i className="fa-solid fa-cart-shopping" />
            <ItemListContainer valor={props.cantidad}/>
        </div>
    );
};
export default CartWidget;