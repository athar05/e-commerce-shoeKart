import React, { useContext } from "react";
// import { useCart } from "../../context/CartProvider";
// import { useWishlist } from "../../context/WishlistProvider";
import { useProduct } from "../../context/ProductProvider";
import { Link } from "react-router-dom";

function Navbar(props) {
  const {
    productState: { cart, wishlist },
    productDispatch,
  } = useProduct();
  return (
    <div className="nav">
      <div className="nav-left">
        <Link to="/">
          {" "}
          <img
            className="hero-logo"
            src="/assets/images/running-shoes.png"
            alt=""
          />
        </Link>

        <input className="search-bar" type="text" placeholder="Search.." />
        <Link to="/login">
          <div className="button button-icon button-header">
            {" "}
            <span> Login </span>
          </div>
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/cart">
          <figure className="icon icon-cart ">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="badge-count">{cart.length}</div>
          </figure>
        </Link>

        <Link to="/wishlist">
          <figure className="icon icon-wishlist ">
            <i className="fa-solid fa-heart"></i>
            <div className="badge-count">{wishlist.length}</div>
          </figure>
        </Link>

        <figure className="avatar avatar-sm">
          <img src="/assets/images/avataaars.png" alt="" />
        </figure>
      </div>
    </div>
  );
}

export default Navbar;
