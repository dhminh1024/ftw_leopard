import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart({ cartProducts, increaseQuant, decreaseQuant }) {
  return (
    <div>
      <h3>Cart</h3>
      <ul style={{ listStyle: "none" }}>
        {cartProducts.map((product) => (
          <li key={product.id}>
            <CartItem
              product={product}
              increaseQuant={increaseQuant}
              decreaseQuant={decreaseQuant}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
