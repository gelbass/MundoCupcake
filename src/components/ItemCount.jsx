import React, { useState } from "react";

const ItemCount = ({ stock, initial ,onAdd}) => {
  
  const [count, setCount] = useState(initial);
  let valor;
  const Add = () => {
    valor = count;
    if (count < stock) {
      ++valor;
    };
    setCount(valor);
  }

  const Delete = () => {
    valor = count;
    if (count >= 1) {
      --valor;
    }
    setCount(valor);
  }

  return (
    <>
      <div className="input-group justify-content-center m-1">
        <input type="button" className="btn btn-verde" value="-" onClick={Delete} />
        <input type="text" className="cantidadCompra m-0" value={count} disabled />
        <input type="button" className="btn btn-verde" value="+" onClick={Add} />
      </div>
      <input type="button" className="btn btn-verde" value="Agregar al carrito" onClick={()=>{onAdd(count)}} />
    </>
  );
};

export default ItemCount;

