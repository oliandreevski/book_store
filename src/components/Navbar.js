import React from "react";
import Logo from "../assets/logo.png";
import "./navbar.css";
import GenreFilter from "./Genre-filter";
import SearchFilter from "./Search-filter";
const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__container container">
        <div className="main-nav__logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="main-nav__filters">
          <SearchFilter />
          <GenreFilter />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
