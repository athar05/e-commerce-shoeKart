// import React, { useContext, useReducer } from "react";
// import { products } from "../backend/db/products";
// import WishlistContext from "./WishlistContext";
// import WishlistReducer from "../reducer/WishlistReducer";
// // import products from "../backend/db/products";

// const useWishlist = () => useContext(WishlistContext);

// function WishlistProvider({ children }) {
//   const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, {
//     products: products,
//     wishlist: [],
//   });

//   return (
//     <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// }

// export { WishlistProvider, useWishlist };
