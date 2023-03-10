import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";

function navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}

export default navbar;
