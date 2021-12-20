import React from "react";
import Products from "./Products";
import Cart from "./Cart";

export default function MyShop() {
  return (
    <div className="headerDiv">
      <h1 className="header">Welcome to my shop!</h1>
      <hr />
      <div className="bodyDiv">
        <Products />
        <Cart />
      </div>
    </div>
  );
}
