import React from "react";
import { useCart } from "../../context/CartProvider";
import { useWishlist } from "../../context/WishlistProvider";
import { useFilter } from "../../context/FilterProvider";
import { Link } from "react-router-dom";

function Product({ products }) {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const {
    filterState: { product, sortBy, byStock, byRating, byBrand },
  } = useFilter();

  const filteredProducts = () => {
    let sortedProducts = product;

    if (sortBy) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sortBy === "LOW_TO_HIGH" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byBrand) {
      console.log("byBrandddddd", byBrand);
      sortedProducts = sortedProducts.filter((prod) => prod.brand === byBrand);
    }

    if (byRating) {
      console.log(byRating);
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating === byRating
      );
    }
    return sortedProducts;
  };

  const finalFilteredProducts =
    products &&
    filteredProducts().map((prod) => (
      <div className="card card-shadow" key={prod.id}>
        <div className="card-image-with-badge">
          <img className="card-image" src={prod.img} alt="" />
          <figure>{prod.categoryName}</figure>
        </div>
        <div className="card-description">
          <h3>{prod.name}</h3>
          <div className="card-product-details">
            <p>{prod.brand}</p>
            <p>
              ₹{prod.price}
              <strike className="card-strk">₹1599</strike>
            </p>
          </div>

          {prod.inStock ? (
            <div className="card-buttons">
              {cart.some((p) => p.id === prod.id) ? (
                <Link to="/cart">
                  {" "}
                  <button className="button button-icon">
                    <i className="fa-solid fa-cart-shopping"></i>
                    Go To Cart
                  </button>{" "}
                </Link>
              ) : (
                <button
                  className="button button-icon"
                  onClick={() =>
                    cartDispatch({
                      type: "ADD_TO_CART",
                      payload: prod,
                    })
                  }
                >
                  <i className="fa-solid fa-heart"></i>
                  Add To Cart
                </button>
              )}
              {wishlist.some((p) => p.id === prod.id) ? (
                <Link to="/wishlist">
                  {" "}
                  <button className="button button-icon">
                    <i className="fa-solid fa-heart"></i>
                    Go To Wishlist
                  </button>
                </Link>
              ) : (
                <button
                  className="button button-icon"
                  onClick={() =>
                    wishlistDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: prod,
                    })
                  }
                >
                  {" "}
                  <i className="fa-solid fa-bag-shopping"></i>Add To Wishlist
                </button>
              )}{" "}
            </div>
          ) : (
            <div>OUT OF STOCK </div>
          )}
        </div>
      </div>
    ));

  return finalFilteredProducts;
}

export default Product;
