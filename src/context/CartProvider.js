import React, { useContext, useReducer } from "react";
import { products } from "../backend/db/products";
import CartContext from "./CartContext";
import CartReducer from "../reducer/CartReducer";
// import products from "../backend/db/products";

const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
    wishlist: [],
  });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, useCart };
