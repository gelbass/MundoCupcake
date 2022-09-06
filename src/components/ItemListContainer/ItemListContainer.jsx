import React from "react";
import ItemList from "../ItemList/ItemList";


const productos = [{ id: "CCK-OREO", nombre: "Cupcake de Oreo", cantidad: 10 },
{ id: "CCK-VAINILLA", nombre: "Cupcake de Vainilla", cantidad: 20 },
{ id: "CCK-MOCA", nombre: "Cupcake de Moca", cantidad: 15 },
{ id: "CCK-MARMOLEADO", nombre: "Cupcake Marmoleado", cantidad: 20 },
{ id: "CCK-COCO-DLCH", nombre: "Cupcake de Coco con Dulce de Leche", cantidad: 30 }
];
const ItemListContainer = () => {
  return (
    <>
      <ItemList productos = {productos}/>
    </>
  );
}

export default ItemListContainer;