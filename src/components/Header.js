import React from "react";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div id="header">
      <h1>CV CREATOR</h1>
      <img src={logo} alt="logo" id="logo"></img>
    </div>
  )
}

export default Header;