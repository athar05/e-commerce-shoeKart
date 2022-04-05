import React from "react";
// import { useCart } from "../../context/CartProvider";
import { useProduct } from "../../context/ProductProvider";
// import { useWishlist } from "../../context/WishlistProvider";

function CartCard() {
  // const {
  //   cartState: { cart },
  //   cartDispatch,
  // } = useCart();

  // const { wishlistState, wishlistDispatch } = useWishlist();

  const {
    productState: { cart, wishlist },
    productDispatch,
  } = useProduct();

  return (
    <div>
      {cart.map((prod) => (
        <div className="card card-horizontal" key={prod.id}>
          <div className="card-image">
            <img
              src={prod.img}
              alt="{prod.name}"
              style={{ maxHeight: "15rem", maxWidth: "15rem" }}
            />
          </div>
          <div className="card-description">
            <h2>{prod.name}</h2>
            <p>{prod.brand}</p>
            <p>
              ₹1299 <strike className="card-strk">₹{prod.price}</strike>
            </p>

            <div className="card-quantity" style={{ padding: "0.5rem 0" }}>
              <button
                onClick={() => {
                  productDispatch({
                    type: "INCREMENT_QTY",
                    payload: prod,
                  });
                }}
              >
                +
              </button>
              <span style={{ padding: "0 0.5rem", margin: "0 0.5rem" }}>
                {prod.qty}
              </span>
              <button
                onClick={() =>
                  productDispatch({ type: "DECREMENT_QTY", payload: prod })
                }
              >
                -
              </button>
            </div>
            <div className="card-buttons">
              <button
                style={{ backgroundColor: "var(--primary)" }}
                className="button button-icon button-primary"
                onClick={() =>
                  productDispatch({ type: "REMOVE_FROM_CART", payload: prod })
                }
              >
                {" "}
                <i className="fa-solid fa-cart-shopping"></i>
                Remove From Cart
              </button>
              <button
                style={{ backgroundColor: "var(--primary)" }}
                className="button button-icon button-primary"
                onClick={() =>
                  productDispatch({
                    type: "MOVE_TO_WISHLIST",
                    payload: prod,
                  })
                }
              >
                {" "}
                <i className="fa-solid fa-bag-shopping"></i>Move To Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartCard;
