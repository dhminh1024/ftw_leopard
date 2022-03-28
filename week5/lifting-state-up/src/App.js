import React, { useState } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

const productsData = [
  { id: 0, name: "Honda CRV", price: 1 },
  { id: 1, name: "G63", price: 1 },
  { id: 2, name: "Santafe", price: 1 },
  { id: 3, name: "CX5", price: 1 },
  { id: 4, name: "Kia Sorento", price: 1 },
];

function App() {
  const [products, setProducts] = useState(productsData);
  const [cartProducts, setCartProducts] = useState([
    // { id: 0, name: "Honda CRV", price: 1, quantity: 4 },
  ]);

  const handleAddToCart = (product) => {
    const found = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );
    if (found) {
      setCartProducts(
        cartProducts.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return { ...cartProduct, quantity: cartProduct.quantity + 1 };
          }
          return cartProduct;
        })
      );
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuant = (product) => {
    setCartProducts(
      cartProducts.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        }
        return cartProduct;
      })
    );
  };

  const decreaseQuant = (product) => {
    setCartProducts(
      cartProducts
        .map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return { ...cartProduct, quantity: cartProduct.quantity - 1 };
          }
          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0)
    );
  };

  return (
    <>
      <h1>Leopard Store</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ProductList products={products} handleAddToCart={handleAddToCart} />
        <Cart
          cartProducts={cartProducts}
          increaseQuant={increaseQuant}
          decreaseQuant={decreaseQuant}
        />
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
