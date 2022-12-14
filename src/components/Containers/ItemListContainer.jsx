import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import ItemList from "../Items/ItemList";
import Loading from "../Loading";

const ItemListContainer = ({ productos }) => {
  const { categoria } = useParams();
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const promesa = new Promise((resolve) => {
        resolve(productos);
      });
      promesa.then((request) => {
        setProducto(request);
      });
      setLoading(false)
    }, 2000);
  }, [categoria, productos]);

  return (
    <>
      {categoria ? <h2 className="m-5 text-center">{categoria.toUpperCase()}</h2> : <Header />}
      {loading ? <Loading /> : <ItemList productos={producto} categoria={categoria} />}
    </>
  );
}

export default ItemListContainer;