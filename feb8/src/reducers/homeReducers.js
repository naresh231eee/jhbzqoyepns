import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function homeReducer(state = initialState.home, action) {
  switch (action.type) {
    case types.GET_PRODUCTS:
    console.log(action);
      return action.home;
    default:
      return state;
  }
}
