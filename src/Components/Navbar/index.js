import React, { useState } from "react";
import Logo from "./../../Assets/logo.png";
import { Close, MenuOutlined, HelpOutlineOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
          <img src={Logo} alt="" />
        </Link>
        <div className="menuIcon" onClick={handleClick}>
          {click ? <Close /> : <MenuOutlined />}
        </div>
        <ul className={click ? "navMenu active" : "navMenu"}>
          <li className={"navItem" , props.home ? "activeLink" : ""} >
            <Link to="/" className="navLinks" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="navItem">
            <Link to="/" className="navLinks" onClick={closeMobileMenu}>
              Reference Corner
            </Link>
          </li>
          <li className={"navItem" , props.dashboard ? "activeLink" : ""} >
            <Link
              to="/dashboard"
              className="navLinks"
              onClick={closeMobileMenu}
            >
              Dashboard
            </Link>
          </li>
        </ul>
        <div className="infoIcon">
          <HelpOutlineOutlined />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
