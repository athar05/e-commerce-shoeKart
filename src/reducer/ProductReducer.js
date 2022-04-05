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
        ...productState,
        wishlist: [...productState.wishlist, { ...action.payload }],
      };
    case "MOVE_TO_WISHLIST":
      return {
        ...productState,
        cart: productState.cart.filter((prod) => prod.id !== action.payload.id),
        wishlist: [...productState.wishlist, { ...action.payload }],
      };
    case "INCREMENT_QTY":
      return {
        ...productState,
        cart: productState["cart"].map((prod) =>
          prod.id === action.payload.id ? { ...prod, qty: prod.qty + 1 } : prod
        ),
      };
    case "DECREMENT_QTY":
      let isQtyZero = false;
      let updatedCart = productState["cart"].map((prod) => {
        if (prod.id === action.payload.id) {
          if (prod.qty === 1) isQtyZero = true;
          else {
            return { ...prod, qty: prod.qty - 1 };
          }
          return prod;
        } else {
          return prod;
        }
      });

      if (isQtyZero) {
        updatedCart = updatedCart.filter(
          (prod) => prod.id !== action.payload.id
        );
      }

      return { ...productState, cart: updatedCart };
  }
}

export default ProductReducer;
