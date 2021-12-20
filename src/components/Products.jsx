import React from "react";
// import store from "../store";
import { connect } from "react-redux";

import Product from "./Product";

function Products({ items }) {
  //   let items = store.getState().products;
  const currentProducts = items.map((item) => {
    return (
      <Product
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
      <h2>Products</h2>
      <br />
      {currentProducts}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.products,
  };
};

export default connect(mapStateToProps, null)(Products);
