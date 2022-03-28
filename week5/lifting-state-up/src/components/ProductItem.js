import React from "react";

function ProductItem({ product, handleAddToCart }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "150px",
      }}
    >
      <h6>{product.name}</h6>
      <button
        onClick={() => handleAddToCart(product)}
        style={{ display: "block", height: "20px" }}
      >
        +
      </button>
    </div>
  );
}

export default ProductItem;
