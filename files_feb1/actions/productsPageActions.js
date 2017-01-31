import * as types from './actionTypes';
import ProductsPageApi from '../api/productsPageApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function productsSuccess(products) {
  return { type: types.PRODUCTS_SUCCESS, products};
}

export function loadProductDetails() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ProductsPageApi.getProducts().then(products => {
      dispatch(productsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}
