import { useEffect, useState } from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch('./productos.json').then((response) => {
        return response.json();
      }).then((result) => {
        setProductos(result);
        console.log(result)
      });
    }, 1000);
  });
  console.log(productos);
  console.log(productos[0]);
  return (
    <>
      <NavBar />
      <ItemListContainer productos={productos} cantidad="1" />
      <ItemDetailContainer producto={productos[0]}/>
    </>
  );
}

export default App;
