import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartDetail from './components/Cart/CartDetail';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import ItemListContainer from './components/Containers/ItemListContainer';
import CartProvider from './components/Context/CartContext';
import NavBar from './components/NavBar';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Checkout from './components/Cart/Checkout';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_NraLMsoa2ikDGM79Sx2qTnd4LIJsHCY",
  authDomain: "mundocupcakeuy.firebaseapp.com",
  projectId: "mundocupcakeuy",
  storageBucket: "mundocupcakeuy.appspot.com",
  messagingSenderId: "1089557108357",
  appId: "1:1089557108357:web:ccd45d7465ccd58e907bec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
function App() {
  const [productos, setProductos] = useState([]);
  const [checkOut, setCheckOut] = useState([]);
  useEffect(()=>{
    const db = getFirestore();
    // const dataRef = doc(db,"productos","LhAn6IEnHdGy0PHjhndi");
    const productosColletion = collection(db, "Productos");

    getDocs(productosColletion).then((snapshot)=>{
      setProductos(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
    });

  },[])
  
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar productos={productos} />
        <Routes >
          <Route exact path="/" element={<ItemListContainer productos={productos} />} />
          <Route exact path="/:categoria" element={<ItemListContainer productos={productos} />} />
          <Route exact path="/producto/:id" element={<ItemDetailContainer productos={productos} />} />
          <Route exact path="/carrito" element={<CartDetail />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
