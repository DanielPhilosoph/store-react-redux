import React from "react";
import { connect } from "react-redux";

import { addToCart } from "../helpers/helper";

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
      dispatch(addToCart(id, name, cost, amount)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
