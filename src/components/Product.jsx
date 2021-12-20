import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

function Product({ name, cost, amount, id, addToCart }) {
  if (amount === 0) {
    return "";
  }
  return (
    <div>
      <h3 className="productName">{name}</h3>
      <span className="productInfo">
        ${cost} x {amount}
      </span>{" "}
      <button
        type="button"
        className="addToCartBtn"
        onClick={() => addToCart(id, name, cost, amount)}
      >
        Add to cart
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, name, cost, amount) =>
      dispatch({
        type: actions.ADD_TO_CART,
        payload: { id: id, name: name, cost: cost, amount: amount },
      }),
  };
};

export default connect(null, mapDispatchToProps)(Product);
