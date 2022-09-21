import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartDetail from './components/Cart/CartDetail';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import ItemListContainer from './components/Containers/ItemListContainer';
import CartProvider from './components/Context/CartContext';
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
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar productos={productos}/>
        <Routes >
          <Route exact path="/" element={<ItemListContainer productos={productos} />} />
          <Route exact path="/:categoria" element={<ItemListContainer productos={productos} />} />
          <Route exact path="/producto/:id" element={<ItemDetailContainer productos={productos}/>} />
          <Route exact path="/carrito" element={<CartDetail />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
