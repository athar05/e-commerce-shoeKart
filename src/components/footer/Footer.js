import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-about-company">
            <h3 className="h3 text-primary">shoeKart</h3>
            <p className="text-md ">
              {" "}
              Shop exclusive coverse footwear from shoeKart. Our primary focus
              is designing and manufacturing the highest quality footwear,
              specializing in skateboarding shoes, snowboarding boots,
            </p>
          </div>
          <div className="footer-quick-links">
            <h4 className="h4">Quick Links</h4>
            <ul className="unordered-list">
              <Link to="/products">
                <li>Products</li>
              </Link>
              <Link to="/wishlist">
                <li>Wishlist</li>
              </Link>
              <Link to="/cart">
                <li>Cart</li>
              </Link>
            </ul>
          </div>
          <div className="footer-contact-us">
            <h4 className="h4">Contact Us</h4>
            <ul className="unordered-list">
              <li>
                {" "}
                <i className="fa-solid fa-location-check"></i>
                Main St Follansbee, West Virginia(WV), 26037
              </li>
              <li>
                <i className="fa-solid fa-phone"> </i> +23-918128345
              </li>
              <li>
                <i className="fa-solid fa-envelope"> </i> support@shoekart.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
