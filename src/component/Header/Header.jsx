import React from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="" />
        <div className="navbar">
          <a href="/order">Order</a>
          <a href="/order-review">Order Review</a>
          <a href="/manage-inventory">Manage Inventory</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
