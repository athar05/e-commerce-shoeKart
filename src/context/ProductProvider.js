import React, { useContext, useReducer } from "react";
import { products } from "../backend/db/products";
import ProductContext from "./ProductContext";
import ProductReducer from "../reducer/ProductReducer";
// import CartReducer from "../reducer/CartReducer";

const useProduct = () => useContext(ProductContext);

function ProductProvider({ children }) {
  const [productState, productDispatch] = useReducer(ProductReducer, {
    products: products,
    cart: [],
    wishlist: [],
  });
  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, useProduct };
