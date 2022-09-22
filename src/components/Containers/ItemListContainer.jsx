import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import ItemList from "../Items/ItemList";

const ItemListContainer = ({productos}) => {
  const { categoria } = useParams();


  const [producto, setProducto] = useState([]);

    useEffect(() => {
    setTimeout(() => {
      const promesa = new Promise((resolve) => {
        resolve(productos);
      });
      promesa.then((request) => {
        setProducto(request);
      });
    }, 2000);
  }, [categoria,producto]);

  return (
    <>
      {categoria ? <h2 className="m-5 text-center">{categoria.toUpperCase()}</h2> : <Header />}
      <ItemList productos={producto} categoria={categoria} />
    </>
  );
}

export default ItemListContainer;