import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
// import { CartProvider } from "./context/CartProvider";
// import { WishlistProvider } from "./context/WishlistProvider";
import { FilterProvider } from "./context/FilterProvider";
import { ProductProvider } from "./context/ProductProvider";

// Call make Server
makeServer();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <BrowserRouter>
    <FilterProvider>
      <ProductProvider>
        {/* <WishlistProvider> */}
        {/* <CartProvider> */}
        <App />
        {/* </CartProvider> */}
        {/* </WishlistProvider> */}
      </ProductProvider>
    </FilterProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
