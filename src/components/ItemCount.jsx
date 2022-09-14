import React, { useState } from "react";
import CartWidget from "./CartWidget";

const ItemCount = ({ stock, initial }) => {
  const [addCart, setAddCart] = useState("0");
  const [countAdd, setCountAdd] = useState(initial);
  let valor;
  const Add = () => {
    valor = countAdd;
    if (countAdd < stock) {
      ++valor;
    };
    setCountAdd(valor);
  }

  const Delete = () => {
    valor = countAdd;
    if (countAdd >= 1) {
      --valor;
    }
    setCountAdd(valor);
  }
  const onAdd = () => {
    setAddCart(countAdd);
  }
  return (
    <>
      <div className="input-group justify-content-center m-1">
        <input type="button" className="btn btn-verde" value="-" onClick={Delete} />
        <input type="text" className="cantidadCompra m-0" value={countAdd} disabled />
        <input type="button" className="btn btn-verde" value="+" onClick={Add} />
      </div>
      <input type="button" className="btn btn-verde" value="Agregar al carrito" onClick={onAdd} />
      <CartWidget cantidad={addCart} />
    </>
  );
};

export default ItemCount;

