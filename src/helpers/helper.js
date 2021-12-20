import * as actions from "../actions";

export const addToCart = (id, name, cost, amount) => {
  return {
    type: actions.ADD_TO_CART,
    payload: { id: id, name: name, cost: cost, amount: amount },
  };
};

export const buy = () => {
  return {
    type: actions.BUY,
  };
};
