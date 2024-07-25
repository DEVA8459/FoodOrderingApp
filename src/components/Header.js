import React from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
            alt="Swiggy Logo"
          />
        </div>
        <ul className="navbar-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/aboutus">
            <li>About Us</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
