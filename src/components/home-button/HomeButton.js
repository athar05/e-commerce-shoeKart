import React from "react";
import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <div>
      <div className="button button-icon">
        <Link to="/products">
          <span> Shop Now </span>
        </Link>
      </div>
    </div>
  );
}

export default HomeButton;
