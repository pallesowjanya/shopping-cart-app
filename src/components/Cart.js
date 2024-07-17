// src/components/Cart.js
import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <p>The cart is empty.</p>}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} onRemoveFromCart={onRemoveFromCart} />
      ))}
    </div>
  );
};

export default Cart;
