import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";


const productos = [{ id: "CCK-OREO", nombre: "Cupcake de Oreo", cantidad: 10 },
{ id: "CCK-VAINILLA", nombre: "Cupcake de Vainilla", cantidad: 20 },
{ id: "CCK-MOCA", nombre: "Cupcake de Moca", cantidad: 15 },
{ id: "CCK-MARMOLEADO", nombre: "Cupcake Marmoleado", cantidad: 20 },
{ id: "CCK-COCO-DLCH", nombre: "Cupcake de Coco con Dulce de Leche", cantidad: 30 }
];
const ItemListContainer = () => {
  const [producto, setProducto] = useState([]);
  useEffect(()=>{
    const promesa = new Promise((resolve,rejet)=>{
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    promesa.then((request)=>{
      setProducto(request);
    })
  })
  return (
    <>
      <ItemList productos = {producto}/>
    </>
  );
}

export default ItemListContainer;