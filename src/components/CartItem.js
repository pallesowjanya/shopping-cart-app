// src/components/CartItem.js
import React from "react";

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button onClick={() => onRemoveFromCart(item)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
