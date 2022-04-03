import React, { createContext } from "react";
import { products } from "../backend/db/products";

const WishlistContext = createContext({
  products: products,
  wishlist: [],
});

export default WishlistContext;
