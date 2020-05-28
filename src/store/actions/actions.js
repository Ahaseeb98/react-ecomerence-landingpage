import * as actionTypes from './actionTypes';

const onAddCart = cart => {
  console.log(cart)
  return dispatch => {
    return dispatch({
      type: actionTypes.ONADDCART,
      payload: cart,
    });
  };
};

const onRemoveCart = cart => {
  console.log(cart)
  return dispatch => {
    return dispatch({
      type: actionTypes.ONREMOVECART,
      payload: cart,
    });
  };
};

export {onAddCart, onRemoveCart};
