import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../Assets/logo.png";
import {
  AiOutlineClose,
  AiOutlineBars,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <span to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="" />
        </span>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <AiOutlineClose /> : <AiOutlineBars />}
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item active">
            <span to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </span>
          </li>

          <li className="nav-item">
            <span
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products
            </span>
          </li>
          <li className="nav-item ">
            <span
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </span>
          </li>
          {/* <li className="nav-item active">
            <AiOutlineQuestionCircle />
          </li> */}
        </ul>
            <AiOutlineQuestionCircle style={{display: "none"}}/>
      </nav>
    </>
  );
}

export default Navbar;
