import React, { useReducer } from "react";

function CartReducer(cartState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        cart: [...cartState.cart, { ...action.payload, qty: 1 }],
      };
  }
}

export default CartReducer;
