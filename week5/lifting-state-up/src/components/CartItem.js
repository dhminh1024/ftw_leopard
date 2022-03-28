import React from "react";

function CartItem({ product, increaseQuant, decreaseQuant }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "150px",
      }}
    >
      <h6>
        <button onClick={() => increaseQuant(product)}>+</button>{" "}
        {product.quantity}{" "}
        <button onClick={() => decreaseQuant(product)}>-</button> x{" "}
        {product.name}
      </h6>
      <h6>$ {product.price * product.quantity}</h6>
    </div>
  );
}

export default CartItem;
