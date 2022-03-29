import React from "react";

function ProductItem({ product, dispatch }) {
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
        onClick={() => dispatch({ type: "ADD", payload: product })}
        style={{ display: "block", height: "20px" }}
      >
        +
      </button>
    </div>
  );
}

export default ProductItem;
