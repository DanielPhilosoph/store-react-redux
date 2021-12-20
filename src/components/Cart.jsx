import React from "react";
import { connect } from "react-redux";

import CartProduct from "./CartProduct";
import { buy } from "../helpers/helper";

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
      <h3 className="totalH3">Total: ${total}</h3>
      <hr />
      <button type="button" className="buyBtn" onClick={() => buyAll()}>
        Buy
      </button>
    </div>
  );
}

// Transform the prop 'cart' to props
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

// Transform the function buyAll to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyAll: () => {
      dispatch(buy());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
