import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { showMobileIcon, setMobileMenu } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cocktail db logo" className="logo" />
        </Link>
        <div onClick={setMobileMenu} className="mobile-button-container">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div
        className={`${showMobileIcon ? "nav-dropdown show" : "nav-dropdown"}`}
      >
        <ul className="dropdown-links">
          <li>
            <Link onClick={setMobileMenu} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={setMobileMenu} to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
