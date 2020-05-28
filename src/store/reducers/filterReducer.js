import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  filterRecipe: null,
};

const FilterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FILTERBYNAME:
      return {
        ...INITIAL_STATE,
        filterRecipe: action.payload,
      };

    default:
      return state;
  }
};

export default FilterReducer;
