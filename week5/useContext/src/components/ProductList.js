import React from "react";
import ProductItem from "./ProductItem";
import useCartContext from "../hooks/useCartContext";

function ProductList() {
  const cartProducts = useCartContext();
  return (
    <div>
      <h2>Product List</h2>
      {cartProducts.map((product) => (
        <ProductItem key={product.id} name={product.name} />
      ))}
    </div>
  );
}

export default ProductList;
