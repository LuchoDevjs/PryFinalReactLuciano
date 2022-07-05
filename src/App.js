import "./App.css";
// import ItemCount from './components/ItemCount';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404";
import Cart from "./components/Cart";
import CartContext from "./components/context/CartContext";
import MyProvider from "./components/context/CartContext";
import { initializeApp } from "firebase/app";
import Checkout from "./components/Checkout";
import { Foormik } from "./components/Foormik";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyA0gk4HtHeXEeyREEsYh3ts9LObNCB-vYQ",
    authDomain: "proyecto1-gonzalez.firebaseapp.com",
    projectId: "proyecto1-gonzalez",
    storageBucket: "proyecto1-gonzalez.appspot.com",
    messagingSenderId: "128197721879",
    appId: "1:128197721879:web:613a0197350336ae294152",
  };
  initializeApp(firebaseConfig);
  return (
    <div className="App">
      <BrowserRouter>
        <MyProvider>
          <CartContext>
            <NavBar />
            <div className="contenido">
              <Routes>
                <Route
                  path="/"
                  element={
                    <ItemListContainer saludo="BIENVENIDOS A MI E-COMMERCE" />
                  }
                />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/formik" element={<Foormik />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </div>
          </CartContext>
        </MyProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
