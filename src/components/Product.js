// src/components/Product.js
import React from "react";

const Product = ({ product, onAddToCart, inCart }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={() => onAddToCart(product)}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Product;
