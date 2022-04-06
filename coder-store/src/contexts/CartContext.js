import React, { useReducer, createContext } from "react";
import apiService from "../app/apiService";

export const CartContext = createContext();

const initialState = {
  cart: [],
  delivery: {
    address: "",
    city: "",
    country: "",
  },
};

const cartReducer = (state, action) => {
  let product;
  switch (action.type) {
    case "ADD":
      product = action.payload;
      const found = state.cart.find(
        (cartProduct) => cartProduct.id === product.id
      );
      if (found) {
        return {
          ...state,
          cart: state.cart.map((cartProduct) => {
            if (cartProduct.id === product.id) {
              return { ...cartProduct, quantity: cartProduct.quantity + 1 };
            }
            return cartProduct;
          }),
        };
      } else {
        return { ...state, cart: [...state.cart, { ...product, quantity: 1 }] };
      }

    case "INC_QUANT":
      return {
        ...state,
        cart: state.cart.map((cartProduct) => {
          if (cartProduct.id === action.payload) {
            return { ...cartProduct, quantity: cartProduct.quantity + 1 };
          }
          return cartProduct;
        }),
      };

    case "DEC_QUANT":
      return {
        ...state,
        cart: state.cart
          .map((cartProduct) => {
            if (cartProduct.id === action.payload) {
              return { ...cartProduct, quantity: cartProduct.quantity - 1 };
            }
            return cartProduct;
          })
          .filter((product) => product.quantity > 0),
      };

    case "DEL_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    case "CLEAR":
      return { ...state, cart: [] };

    case "SET_DELIVERY":
      return { ...state, delivery: action.payload };

    default:
      return state;
  }
};

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const checkout = async (order, cb) => {
    try {
      const response = await apiService.post("/orders", order);
    } catch (error) {
      console.log(error);
    }
    cb();
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts: state.cart,
        dispatch,
        delivery: state.delivery,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
