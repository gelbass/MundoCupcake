import { useEffect, useState } from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    console.log("entro");
    setTimeout(() => {
      fetch('./productos.json').then((response) => {
        console.log(response);
        return response.json();
      }).then((result) => {
        setProductos(result);
      });
    }, 1000);
  },[]);

  return (
    <>
      <NavBar />
      <ItemListContainer productos={productos} cantidad="1" />
      <ItemDetailContainer producto={productos[0]} />
    </>
  );
}

export default App;
