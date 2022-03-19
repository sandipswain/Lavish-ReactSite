import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

const linkConfig = [
  {
    link: "",
    text: "Home",
  },
  {
    link: "services",
    text: "Services",
  },
  {
    link: "products",
    text: "Products",
  },
];

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    window.innerWidth <= 960 ? setButton(false) : setButton(true);
  };
  window.addEventListener("resize", showButton);
  useEffect(() => {
    showButton();
  }, []);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              LAVISH
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {linkConfig.map(({ link, text }) => {
                return (
                  <li className="nav-item">
                    <Link
                      to={`/${link}`}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn--link">
                    <Button buttonStyle="btn--outline">Sign Up</Button>
                  </Link>
                ) : (
                  <Link
                    to="/sign-up"
                    className="btn--link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Sign Up
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
