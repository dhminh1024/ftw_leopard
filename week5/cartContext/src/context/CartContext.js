import React, { useReducer, createContext } from "react";

export const CartContext = createContext();

const initialState = [];

const cartReducer = (state, action) => {
  let product;
  switch (action.type) {
    case "ADD":
      product = action.payload;
      const found = state.find((cartProduct) => cartProduct.id === product.id);
      if (found) {
        return state.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return { ...cartProduct, quantity: cartProduct.quantity + 1 };
          }
          return cartProduct;
        });
      } else {
        return [...state, { ...product, quantity: 1 }];
      }

    case "INC_QUANT":
      product = action.payload;
      return state.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        }
        return cartProduct;
      });

    case "DEC_QUANT":
      product = action.payload;
      return state
        .map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return { ...cartProduct, quantity: cartProduct.quantity - 1 };
          }
          return cartProduct;
        })
        .filter((product) => product.quantity > 0);
    case "CLEAR":
      return [];

    default:
      return state;
  }
};

function CartContextProvider({ children }) {
  const [cartProducts, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cartProducts, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
