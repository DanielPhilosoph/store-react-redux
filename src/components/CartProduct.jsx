import React from "react";
import { connect } from "react-redux";

function CartProduct({ name, cost, amount, id }) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>
        ${cost} x {amount}
      </h4>
      <button type="button">Add to cart</button>
    </div>
  );
}

export default connect()(CartProduct);
