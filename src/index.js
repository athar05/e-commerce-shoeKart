import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./context/FilterProvider";
import { ProductProvider } from "./context/ProductProvider";

// Call make Server
makeServer();
ReactDOM.render(
  <BrowserRouter>
    <FilterProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </FilterProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
