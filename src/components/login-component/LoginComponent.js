import React from "react";
import { Link } from "react-router-dom";

function LoginComponent() {
  return (
    <div>
      <section className="login-section">
        <h2 className="align-center">Log In</h2>
        <form className="login-form">
          <div className="input login-input">
            <input type="text" placeholder="Enter Username" />
          </div>
          <div className="input login-input-password">
            <input type="password" placeholder="Enter Password" />
            <i className="fa-solid fa-eye-slash" id="toggle-password-login"></i>
          </div>
          <div className="button button-icon login-button">
            <span> Log In </span>
          </div>
          <p className="login-signup">
            Not A Member Yet?<Link to="#"> Signup</Link> instead.
          </p>
        </form>
      </section>
    </div>
  );
}

export default LoginComponent;
