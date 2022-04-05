import React from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";
import LoginComponent from "../../components/login-component/LoginComponent";

function Login() {
  return (
    <div className="login-parent">
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <LoginComponent />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
