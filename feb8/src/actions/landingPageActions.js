import * as types from './actionTypes';
import landingPageApi from '../api/landingPageApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadInProgressProductsSuccess(inProgressProducts) {
  return { type: types.LOAD_INPROGRESS_PRODUCTS_SUCCESS, inProgressProducts};
}

export function loadInProgressProducts() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return landingPageApi.getAllInProgressProducts().then(inProgressProducts => {
      dispatch(loadInProgressProductsSuccess(inProgressProducts));
    }).catch(error => {
      throw(error);
    });
  };
}
