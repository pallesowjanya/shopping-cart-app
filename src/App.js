// src/App.js
import React, { useState } from "react";
import { products } from "./data";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <ProductList products={products} cartItems={cartItems} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default App;
