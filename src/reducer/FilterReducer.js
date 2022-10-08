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
    case "SHOW_ADIDAS":
      return {
        ...filterState,
        byBrand: {
          ...filterState.byBrand,
          adidas: !filterState.byBrand.adidas,
        },
      };
    case "SHOW_NIKE":
      return {
        ...filterState,
        byBrand: {
          ...filterState.byBrand,
          nike: !filterState.byBrand.nike,
        },
      };
    case "SHOW_CONVERSE":
      return {
        ...filterState,
        byBrand: {
          ...filterState.byBrand,
          converse: !filterState.byBrand.converse,
        },
      };
    case "SHOW_PUMA":
      return {
        ...filterState,
        byBrand: {
          ...filterState.byBrand,
          puma: !filterState.byBrand.puma,
        },
      };
    case "CLEAR_FILTERS":
      return {
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
      };
    default:
      return filterState;
  }
}

export default FilterReducer;
