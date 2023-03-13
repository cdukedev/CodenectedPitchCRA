import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Codenected Logo" />
      </Link>
      <nav className="header__nav">
        <ul className="header__list-items"></ul>
      </nav>
    </header>
  );
};

export default Header;
