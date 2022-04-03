import React, { createContext } from "react";
import { products } from "../backend/db/products";

const CartContext = createContext({
  products: products,
  cart: [],
});

export default CartContext;
