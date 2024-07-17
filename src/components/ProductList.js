// src/components/ProductList.js
import React from "react";
import Product from "./Product";

const ProductList = ({ products, cartItems, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          inCart={cartItems.some((item) => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
