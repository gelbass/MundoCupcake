import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('./data/productos.json').then((response) => {
        return response.json();
      }).then((result) => {
        setProductos(result);
      });
    }, 1000);
  },[]);

  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes >
        <Route exact path="/" element={<ItemListContainer productos={productos}/>}/>
        <Route exact path="/:categoria" element={<ItemListContainer productos={productos}/>}/>
        <Route exact path="/producto/:id" element={<ItemDetailContainer productos={productos}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
