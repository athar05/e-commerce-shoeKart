import CartCard from "../components/cart-card/CartCard";

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

    case "MOVE_TO_CART":
      const prodToMove = productState["wishlist"].find(
        (prod) => prod.id === action.payload.id
      );

      let prodToMoveId = prodToMove["id"];
      console.log(prodToMoveId);

      let { cart: newCart } = productState;
      console.log(newCart);

      const result = newCart.filter((item) => item.id == prodToMoveId);
      if (result.length == 0) {
        newCart = [...productState.cart, { ...action.payload, qty: 1 }];
      } else {
        const newQty = newCart.qty + 1;
        const doesProductMatchID = (element) => element.id == prodToMoveId;
        const index = newCart.findIndex(doesProductMatchID);
        console.log(index);
        console.log(newCart[index]);
        newCart[index].qty = newCart[index].qty + 1;
        console.log(newCart[index]);
      }

      let { wishlist: newWishlist } = productState;
      newWishlist = productState.wishlist.filter(
        (prod) => prod.id !== action.payload.id
      );

      return {
        ...productState,
        cart: newCart,
        wishlist: newWishlist,
      };

      console.log(cart["id"]);

      if (prodToMove["id"].some(productState["cart"])) {
        console.log("True");
      } else {
        console.log("False");
      }

      return {
        ...productState,
        cart: [...productState.cart, { ...action.payload, qty: 1 }],
        wishlist: productState.wishlist.filter(
          (prod) => prod.id !== action.payload.id
        ),
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...productState,
        wishlist: productState.wishlist.filter(
          (prod) => prod.id !== action.payload.id
        ),
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
