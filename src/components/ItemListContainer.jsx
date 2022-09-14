import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ productos }) => {

  const { categoria } = useParams();
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const promesa = new Promise((resolve, rejet) => {
        resolve(productos);
      });
      promesa.then((request) => {
        setProducto(request);
      });
    }, 2000);
  }, [categoria]);
  
  return (
    <>
      <h2 className="m-5 text-center">{categoria ? categoria.toUpperCase() : "PRODUCTOS"}</h2>
      <ItemList productos={producto} categoria={categoria} />
    </>
  );
}

export default ItemListContainer;