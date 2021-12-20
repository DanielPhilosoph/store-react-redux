// import * as actions from "./actions";
// import { combineReducers } from "redux";
// import store from "./store";

// let initialStateProducts = [
//   { id: 1, name: "melon", amount: 5, cost: 10 },
//   { id: 2, name: "banana", amount: 20, cost: 4 },
//   { id: 3, name: "apple", amount: 11, cost: 3 },
//   { id: 4, name: "orange", amount: 23, cost: 4 },
// ];

// function cartReducer(state = [], action) {
//   switch (action.type) {
//     case actions.ADD_TO_CART:
//       let isUpdated = false;
//       // Add 1 to cart if exist
//       let newCartsArr = [...state];
//       newCartsArr = newCartsArr.map((cartItem) => {
//         if (cartItem.id === action.payload.id) {
//           isUpdated = true;
//           cartItem.amount += 1;
//         }
//         return cartItem;
//       });

//       // Reduce from products
//       store.dispatch({
//         type: actions.MOVE_1_TO_CART,
//         payload: { id: action.payload.id },
//       });

//       // If was not in cart before then...
//       if (!isUpdated) {
//         // add to cart
//         return [
//           ...state,
//           {
//             id: action.payload.id,
//             amount: 1,
//             name: action.payload.name,
//             cost: action.payload.cost,
//           },
//         ];
//       } else {
//         // If did update, return state
//         return newCartsArr;
//       }

//     case actions.BUY:
//     default:
//       return state;
//   }
// }

// function productsReducer(state = initialStateProducts, action) {
//   switch (action.type) {
//     case actions.ADD_TO_CART:
//       const newItemsArr = state.products.map((item) => {
//         if (item.id === action.payload.id) {
//           item.amount -= 1;
//         }
//         return item;
//       });
//     case actions.MOVE_1_TO_CART:
//       // Reduce 1 from items in store
//       const newItemsArr = state.products.map((item) => {
//         if (item.id === action.payload.id) {
//           item.amount -= 1;
//         }
//         return item;
//       });

//       return newItemsArr;

//     case actions.BUY:
//       state = [];
//       return state;

//     default:
//       return state;
//   }
// }

// export default combineReducers({ productsReducer, cartReducer });

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

import * as actions from "./actions";

let initialState = {
  products: [
    { id: 1, name: "melon", amount: 5, cost: 10 },
    { id: 2, name: "banana", amount: 20, cost: 4 },
    { id: 3, name: "apple", amount: 11, cost: 3 },
    { id: 4, name: "orange", amount: 23, cost: 4 },
  ],
  cart: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      let isUpdated = false;
      // Add 1 to cart if exist

      let newCartsArr = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          isUpdated = true;
          cartItem.amount += 1;
        }
        return cartItem;
      });

      const newItemsArr = state.products.map((item) => {
        if (item.id === action.payload.id) {
          item.amount -= 1;
        }
        return item;
      });

      // If was not in cart before then...
      if (!isUpdated) {
        // add to cart
        return {
          products: newItemsArr,
          cart: [
            ...state.cart,
            {
              id: action.payload.id,
              amount: 1,
              name: action.payload.name,
              cost: action.payload.cost,
            },
          ],
        };
      } else {
        // If did update, return state
        return { products: newItemsArr, cart: newCartsArr };
      }

    case actions.BUY:
    default:
      return state;
  }
}

export default reducer;
