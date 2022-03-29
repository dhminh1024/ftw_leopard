import React, { useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItem from "./CartItem";

function Cart() {
  const { cartProducts, dispatch } = useCartContext();
  return (
    <div>
      <h3>Cart</h3>
      <button onClick={() => dispatch({ type: "CLEAR" })}>&times;</button>
      <ul style={{ listStyle: "none" }}>
        {cartProducts.map((product) => (
          <li key={product.id}>
            <CartItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
