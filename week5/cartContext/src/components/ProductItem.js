import React from "react";
import useCartContext from "../hooks/useCartContext";

function ProductItem({ product }) {
  const { dispatch } = useCartContext();
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
