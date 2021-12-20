import React from "react";
import Products from "./Products";
import Cart from "./Cart";

export default function MyShop() {
  return (
    <div>
      <h1>Welcome to my shop!</h1>
      <hr />
      <Products />
      <Cart />
    </div>
  );
}
