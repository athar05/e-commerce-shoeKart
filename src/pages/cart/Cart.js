import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navigation/Navbar";
import { useProduct } from "../../context/ProductProvider";
import CartCard from "../../components/cart-card/CartCard";
import PricingCard from "../../components/pricing-card/PricingCard";

const Cart = () => {
  const {
    productState: { cart, wishlist },
  } = useProduct();

  const { productState } = useProduct();

  return (
    <div className="cart-parent">
      <div className="header">
        <Navbar />
      </div>
      <div className="cart-content">
        <div className="items-col">
          <h2 className="h2">Cart</h2>
          <CartCard />
        </div>

        <div className="pricing-col">
          <h2>Pricing</h2>
          <PricingCard />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
