import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function useCartContext() {
  return useContext(CartContext);
}

export default useCartContext;
