import { createStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer";

const store = createStore(productsReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
