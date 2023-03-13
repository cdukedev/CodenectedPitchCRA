import "./Header.scss";
import React from "react";
import logo from "../../assets/logos/logo.png";

const Header = () => {
  return (
    <header className="header">
      <a href="https://www.codenected.live/">
        <img className="header__img" src={logo} alt="Codenected Logo" />
      </a>
      <nav className="header__nav">
        <ul className="header__list-items"></ul>
      </nav>
    </header>
  );
};

export default Header;
