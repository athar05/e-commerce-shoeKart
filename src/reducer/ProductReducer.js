function ProductReducer(productState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...productState,
        cart: [...productState.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...productState,
        cart: productState.cart.filter((prod) => prod.id !== action.payload.id),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...cartState,
        wishlist: [...productState.wishlist, { ...action.payload }],
      };
    case "MOVE_TO_WISHLIST":
      return {
        ...productState,
        // copied from cart reducer
        cart: productState.cart.filter((prod) => prod.id !== action.payload.id),
        wishlist: [...productState.wishlist, { ...action.payload }],
      };
  }
}

export default ProductReducer;
