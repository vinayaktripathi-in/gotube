import React from "react";
import "./navbar.css";
import logo from "./Feed";

function navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <div className="line-1"></div>
      <form className="search-bar">
        <input className="search-text" type="text" placeholder="Search.." name="search" />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
  );
}

export default navbar;
