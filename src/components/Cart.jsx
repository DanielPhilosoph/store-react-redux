import React from "react";
import { connect } from "react-redux";

import CartProduct from "./CartProduct";
import * as actions from "../actions";

function Cart({ cart, buyAll }) {
  let total = 0;
  const cartProducts = cart.map((item) => {
    total += item.cost * item.amount;
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
    <div className="cartMainDiv">
      <h2>Cart</h2>
      <br />
      {cartProducts}
      <hr />
      <h3>Total: ${total}</h3>
      <hr />
      <button type="button" className="buyBtn" onClick={() => buyAll()}>
        Buy
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyAll: () => {
      dispatch({ type: actions.BUY });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
