import React, { useReducer } from "react";

function CartReducer(cartState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        cart: [...cartState.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cart: cartState.cart.filter((prod) => prod.id !== action.payload.id),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...cartState,
        wishlist: [...cartState.wishlist, { ...action.payload }],
      };
    case "MOVE_TO_WISHLIST":
      return {
        ...cartState,
        // copied from cart reducer
        cart: cartState.cart.filter((prod) => prod.id !== action.payload.id),
        wishlist: [...cartState.wishlist, { ...action.payload }],
      };
  }
}

export default CartReducer;
