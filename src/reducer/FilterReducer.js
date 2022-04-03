import React from "react";
import { products } from "../backend/db/products";

function FilterReducer(filterState, action) {
  console.log(filterState.product.length);
  switch (action.type) {
    case "HIGH_TO_LOW":
      return { ...filterState, sortBy: action.type };
    case "LOW_TO_HIGH":
      return { ...filterState, sortBy: action.type };
    case "FILTER_BY_RATING":
      return { ...filterState, byRating: action.payload };
    case "FILTER_BY_STOCK":
      return { ...filterState, byStock: !filterState.byStock };
    case "FILTER_BY_BRAND":
      return { ...filterState, byBrand: action.payload };
    case "CLEAR_FILTERS":
      return {
        product: products,
        byStock: false,
        byRating: 0,
        bySort: "",
        byBrand: "",
      };
    default:
      return filterState;
  }
}

export default FilterReducer;
