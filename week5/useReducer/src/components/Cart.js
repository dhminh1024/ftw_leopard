import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart({ cartProducts, dispatch }) {
  return (
    <div>
      <h3>Cart</h3>
      <button onClick={() => dispatch({ type: "CLEAR" })}>&times;</button>
      <ul style={{ listStyle: "none" }}>
        {cartProducts.map((product) => (
          <li key={product.id}>
            <CartItem product={product} dispatch={dispatch} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
