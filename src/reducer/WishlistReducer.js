import React from "react";

function WishlistReducer(wishlistState, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        wishlist: [...wishlistState.wishlist, { ...action.payload, qty: 1 }],
      };
  }
}

export default WishlistReducer;
