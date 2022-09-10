import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({productos}) => { 
  
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    const promesa = new Promise((resolve, rejet) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    promesa.then((request) => {
      setProducto(request);
    })
  })
  
  return (
    <>
      <ItemList productos={producto} />
    </>
  );
}

export default ItemListContainer;