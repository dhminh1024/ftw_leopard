import React, { useState } from "react";
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

function App() {
  const [products, setProducts] = useState(productsData);
  const [cartProducts, handleAddToCart, increaseQuant, decreaseQuant] =
    useCart();

  const addProduct = (name) => {
    setProducts([{ id: products.length, name, price: 1 }, ...products]);
  };

  return (
    <>
      <h1>Leopard Store</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <AddProduct addProduct={addProduct} />
          <ProductList products={products} handleAddToCart={handleAddToCart} />
        </div>
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
