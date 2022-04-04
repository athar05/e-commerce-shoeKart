import React, { useContext, useReducer } from "react";
import FilterContext from "./FilterContext";
import FilterReducer from "../reducer/FilterReducer";
import { products } from "../backend/db/products";

const useFilter = () => useContext(FilterContext);

function FilterProvider({ children }) {
  const [filterState, filterDispatch] = useReducer(FilterReducer, {
    product: products,
    byStock: false,
    byRating: 0,
    bySort: "",
    // byBrand: "",
    byBrand: {
      adidas: false,
      nike: false,
      converse: false,
      puma: false,
    },
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
}

export { FilterProvider, useFilter };
