import React from "react";
// import store from "../store";
import { connect } from "react-redux";

import Product from "./Product";

function Products({ items }) {
  //   let items = store.getState().products;
  let isSomeProductsLeft = false;
  const currentProducts = items.map((item) => {
    isSomeProductsLeft = !isSomeProductsLeft ? item.amount !== 0 : true;
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
    <div className="productsMainDiv">
      <h2>Products</h2>
      <br />
      {isSomeProductsLeft ? currentProducts : "No products for now"}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.products,
  };
};

export default connect(mapStateToProps, null)(Products);
