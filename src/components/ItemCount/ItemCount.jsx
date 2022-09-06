import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";

const ItemCount = ({ stock,initial }) => {
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
  const onAdd = ()=>{
    console.log(valor);
    setAddCart(countAdd);
  }
  return (
    <>
      <input type="button" className="btn btn-verde" value="-" onClick={Delete} />
      <input type="text" className="cantidadCompra" value={countAdd} disabled />
      <input type="button" className="btn btn-verde" value="+" onClick={Add} />
      <input type="button" className="btn btn-verde" value="Agregar al carrito" onClick={onAdd} />
      <CartWidget cantidad={addCart} />
    </>
  );
};

export default ItemCount;

