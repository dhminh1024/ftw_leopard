import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, dispatch }) {
  return (
    <div>
      <h3>Product List</h3>
      <ul style={{ listStyle: "none" }}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} dispatch={dispatch} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
