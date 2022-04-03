import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navigation/Navbar";
import { useCart } from "../../context/CartProvider";

const Cart = () => {
  const {
    cartState: { cart },
  } = useCart();

  return (
    <div className="cart-parent">
      <div className="header">
        <Navbar />
      </div>
      <div className="cart-content">
        <div className="items-col">
          <h2>Products</h2>
        </div>

        <div className="pricing-col">
          <h2>Pricing</h2>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
