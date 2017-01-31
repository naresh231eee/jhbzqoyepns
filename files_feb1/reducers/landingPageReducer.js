import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function landingPageReducer(state = initialState.inProgressProducts, action) {
  switch (action.type) {
    case types.LOAD_INPROGRESS_PRODUCTS_SUCCESS:
      return action.inProgressProducts;

    default:
      return state;
  }
}
