import React, { useState, createContext } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([
    { id: 0, name: "CRV", price: 1, quantity: 10 },
    { id: 1, name: "Merc", price: 1, quantity: 10 },
    { id: 2, name: "BMW", price: 1, quantity: 10 },
    { id: 3, name: "KIA", price: 1, quantity: 10 },
  ]);
  return (
    <CartContext.Provider value={cartProducts}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
