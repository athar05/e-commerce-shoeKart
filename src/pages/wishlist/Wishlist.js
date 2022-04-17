import React from "react";
import Navbar from "/components/navigation/Navbar";
// import Product from "../product/Product.js";
import Footer from "/components/footer/Footer";

function Wishlist() {
  return (
    <div className="wishlist-parent">
      <div className="header">
        <Navbar />
      </div>
      <div className="wishlist-content">
        <h1>Wishlist</h1>
        <h3>Here is everything you want... but can't afford!</h3>
        <div className="grid grid-4"> </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Wishlist;
