import React from "react";
import { useProduct } from "../../context/ProductProvider";

function WishlistCard() {
  const {
    productState: { wishlist },
    productDispatch,
  } = useProduct();
  return (
    <div>
      {wishlist.map((prod) => (
        <div className="card" key={prod.id}>
          <div className="card-image-with-dismiss">
            <img
              src={prod.img}
              alt="{prod.name}"
              style={{ maxHeight: "15rem", maxWidth: "15rem" }}
            />
            <figure>
              <i className="fa-solid fa-xmark"></i>
            </figure>
            <div className="card-description">
              <h2>{prod.name}</h2>
              <div className="card-product-details">
                <p>{prod.brand}</p>
                <p>
                  {prod.price} <strike className="card-strk">₹1299</strike>
                </p>
              </div>
              <div className="card-buttons">
                <button
                  className="button button-icon"
                  onClick={() =>
                    productDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: prod,
                    })
                  }
                >
                  {" "}
                  <i className="fa-solid fa-cart-shopping"></i>
                  Remove From Wishlist
                </button>
                <button
                  className="button button-icon"
                  onClick={() =>
                    productDispatch({
                      type: "MOVE_TO_CART",
                      payload: prod,
                    })
                  }
                >
                  {" "}
                  <i className="fa-solid fa-bag-shopping"></i>Move To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WishlistCard;
