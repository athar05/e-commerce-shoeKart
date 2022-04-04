import React from "react";
import { useCart } from "../../context/CartProvider";
import { useWishlist } from "../../context/WishlistProvider";

function CartCard() {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const { wishlistState, wishlistDispatch } = useWishlist();

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
            <p className="text-md text-grey">50% off</p>

            <div className="card-quantity">
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
            <div className="card-buttons">
              <button
                className="button button-icon button-primary"
                onClick={() =>
                  cartDispatch({ type: "REMOVE_FROM_CART", payload: prod })
                }
              >
                {" "}
                <i className="fa-solid fa-cart-shopping"></i>
                Remove From Cart
              </button>
              <button
                className="button button-icon button-primary"
                onClick={() =>
                  wishlistDispatch({
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
