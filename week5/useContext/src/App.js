import React from "react";
import Cart from "./components/Cart";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <CartContextProvider>
      <div>
        <h2>useContext</h2>
        <Cart />
      </div>
    </CartContextProvider>
  );
}

export default App;
