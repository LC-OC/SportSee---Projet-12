import React from "react";
import logo from "../assets/logo.svg";
import Nav from "./Nav";

/**
 * Display the header
 * @component
 * @returns {React.ReactElement}
 */

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo SportSee" className="logo" />
      <Nav />
    </header>
  );
};

export default Header;
