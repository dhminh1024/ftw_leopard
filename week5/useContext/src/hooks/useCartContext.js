import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function useCartContext() {
  return useContext(CartContext);
}
