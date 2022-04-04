function WishlistReducer(wishlistState, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        wishlist: [...wishlistState.wishlist, { ...action.payload }],
      };
    case "MOVE_TO_WISHLIST":
      return {
        ...wishlistState,
        wishlist: [...wishlistState.wishlist, { ...action.payload }],
      };
  }
}

export default WishlistReducer;
