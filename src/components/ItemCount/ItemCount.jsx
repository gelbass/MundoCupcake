import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";

const ItemCount = ({ onAdd }) => {
    const [addCart, setAddCart] = useState(onAdd);

    return (
        <>
            <input type="button" className="btn btn-verde" value="Agregar al carrito" onClick = {()=>{setAddCart(onAdd)}}/>
            <CartWidget cantidad={addCart} />
        </>
    );
};

export default ItemCount;

