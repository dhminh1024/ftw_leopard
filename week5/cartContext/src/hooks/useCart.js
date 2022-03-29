import { useState } from "react";

function useCart() {
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

  return [cartProducts, handleAddToCart, increaseQuant, decreaseQuant];
}

export default useCart;
