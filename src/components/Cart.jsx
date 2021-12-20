import React from "react";
import { connect } from "react-redux";

import CartProduct from "./CartProduct";

function Cart({ cart }) {
  const cartProducts = cart.map((item) => {
    return (
      <CartProduct
        id={item.id}
        key={item.id}
        name={item.name}
        cost={item.cost}
        amount={item.amount}
      />
    );
  });

  return (
    <div>
      <h2>Cart</h2>
      <br />
      {cartProducts}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
