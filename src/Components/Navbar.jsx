import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa"; // Import icons
import "./Navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode); // Toggle dark mode class on body
  };

  return (
    <>
      <nav className="menu-container">

        <NavLink to="/products" className="menu-logo">
          <img src={logo} alt="Infinity Auction" />
        </NavLink>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/add-product">Add New Product</NavLink>
            </li>        
          
            <li>
              <NavLink to="/aboutUs">About Us</NavLink>
            </li>
            <li>
              <button onClick={toggleTheme} className="theme-toggle-btn">
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
