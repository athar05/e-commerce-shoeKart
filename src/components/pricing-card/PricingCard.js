import React, { useEffect, useState } from "react";
// import { useCart } from "../../context/CartProvider";
import { useProduct } from "../../context/ProductProvider";

function PricingCard() {
  // const {
  //   cartState: { cart },
  //   cartDispatch,
  // } = useCart();

  const {
    productState: { cart },
    productDispatch,
  } = useProduct();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div>
      <div className="pricing-card">
        <div className="pricing-card-header-details">
          <h3 style={{ flexGrow: 2 }}> Subtotal: {cart.length} item(s)</h3>
          <h3 style={{ flexGrow: 1 }}>Quantity</h3>
          <h3 style={{ flexGrow: 1 }}>Price</h3>
        </div>
        <div className="pricing-calculations">
          <div className="pricing-calculations-content">
            <div className="text-md text-primary">
              {cart.map((prod) => (
                <p className="h5" key={prod.id}>
                  {prod.name}
                </p>
              ))}
            </div>

            <div className="text-md text-primary">
              {cart.map((prod) => (
                <p className="h5" key={prod.id}>
                  {prod.qty}
                </p>
              ))}
            </div>
            <div className="text-md text-primary">
              {cart.map((prod) => (
                <p className="h5" key={prod.id}>
                  ₹ {prod.price}
                </p>
              ))}{" "}
            </div>
          </div>
        </div>
        <div className="pricing-total">
          <div className="pricing-total-content">
            <p className="text-md-lg text-bold">Total</p>
            <p className="text-md-lg text-bold">₹{total}</p>
          </div>
        </div>
        <div className="savings-info">
          <p className="text-md-lg text-bold align-center">
            You will save ₹499 on this order{" "}
          </p>
        </div>
        <div className="place-order-botton">
          <div className="button button-icon" disabled={cart.length === 0}>
            {" "}
            <span>Place Order </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
