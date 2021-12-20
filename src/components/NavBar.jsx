import React from "react";

export default function NavBar() {
  return (
    <div className="topnav">
      <a href="#home" className="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#shop">Shop</a>
      <a href="#about">About</a>
      <a href="#new" className="icon">
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}
