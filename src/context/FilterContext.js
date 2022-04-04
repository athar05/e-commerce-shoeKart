import React, { createContext } from "react";
import { products } from "../backend/db/products";

const FilterContext = createContext({
  product: products,
  byStock: false,
  byRating: 0,
  sortBy: "",
  // byBrand: "",
  byBrand: {
    adidas: false,
    nike: false,
    converse: false,
    puma: false,
  },
});
export default FilterContext;
