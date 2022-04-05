import React, { createContext } from "react";
import { products } from "../backend/db/products";

const ProductContext = createContext({
  products: products,
  cart: [],
  wishlist: [],
});

export default ProductContext;
