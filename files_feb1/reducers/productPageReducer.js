import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productPageReducer(state = initialState.inProgressProducts, action) {
  switch (action.type) {
    case types.PRODUCTS_SUCCESS:
      return action.products;

    default:
      return state;
  }
}
