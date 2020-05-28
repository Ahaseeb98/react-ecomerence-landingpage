import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  cart: [],
  loading: false,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ONADDCART:
      state.cart.push(action.payload);
      return {
        ...INITIAL_STATE,
        cart: state.cart,
      };

    case actionTypes.ONREMOVECART:
      state.cart.splice(action.payload, 1)
      return {
        ...INITIAL_STATE,
        cart: state.cart,
      };

    default:
      return state;
  }
};

export default CartReducer;
