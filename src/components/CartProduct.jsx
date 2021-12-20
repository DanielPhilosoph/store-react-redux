import React from "react";
import { connect } from "react-redux";

function CartProduct({ name, cost, amount, id }) {
  return (
    <div>
      <hr />
      <h3>{name}</h3>
      <h4>Cost: ${cost * amount}</h4>
      <h4>Amount: {amount}</h4>
    </div>
  );
}

export default connect()(CartProduct);
