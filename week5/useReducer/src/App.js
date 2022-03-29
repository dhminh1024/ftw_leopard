import React, { useState, useReducer } from "react";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import useCart from "./hooks/useCart";

const productsData = [
  { id: 0, name: "Honda CRV", price: 1 },
  { id: 1, name: "G63", price: 1 },
  { id: 2, name: "Santafe", price: 1 },
  { id: 3, name: "CX5", price: 1 },
  { id: 4, name: "Kia Sorento", price: 1 },
];

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
      return state.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity - 1 };
        }
        return cartProduct;
      });
    case "CLEAR":
      return [];

    default:
      return state;
  }
};

function App() {
  const [products, setProducts] = useState(productsData);
  const [cartProducts, dispatch] = useReducer(cartReducer, initialState);
  // const [
  //   cartProducts,
  //   handleAddToCart,
  //   increaseQuant,
  //   decreaseQuant,
  //   removeProduct,
  // ] = useCart();

  const addProduct = (name) => {
    setProducts([{ id: products.length, name, price: 1 }, ...products]);
  };

  return (
    <>
      <h1>Leopard Store</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <AddProduct addProduct={addProduct} />
          <ProductList products={products} dispatch={dispatch} />
        </div>
        <Cart cartProducts={cartProducts} dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;

/**
 * App: products, handleAddToCart(), cartProducts
 *  |-ProductList({products, handleAddToCart})
 *      |- ProductItem({handleAddToCart}) onClick = () => handleAddToCart(product)
 *      |- ProductItem
 *      |- ProductItem
 *      |- ProductItem
 *  |-Cart({ cartProducts })
 *      |- CartItem
 *      |- CartItem
 *      |- CartItem
 *      |- CartItem
 */

// Reducer (pattern Redux)

// state = {
//   cartProducts: []
// }

// dispatch action = {type: "ADD_TO_CART", payload: product}
// dispatch action = {type: "REMOVE_PRODUCT", payload: productId}
// dispatch action = {type: "CLEAR_CART" }

// Reducer = (state, action) => newState

// switch (action.type) {
//     case "ADD_TO_CART":
//       return newState;
//     case "REMOVE_PRODUCT":
//       return newState;
//     case "CLEAR_CART":
//       return newState;
//     default:
//       return state;
// }
