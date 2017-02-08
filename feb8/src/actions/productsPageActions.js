import * as types from './actionTypes';
import ProductsPageApi from '../api/productsPageApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

console.log("printed");

export default function getProductDetails() {
    console.log("called")
  //return (dispatch) => { type: types.GET_PRODUCTS};
  return function(dispatch) { ProductsPageApi.getProducts().then(productDetails => {
      dispatch(productsSuccess(productDetails));
    }).catch(error => {
      throw(error);
    });
  }
}

export function productsSuccess(productDetails) {
  return { type: types.PRODUCTS_SUCCESS, productDetails};
}

export function loadProductDetails() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ProductsPageApi.getProducts().then(productDetails => {
      dispatch(productsSuccess(productDetails));
    }).catch(error => {
      throw(error);
    });
  };
}
