import * as types from './actionTypes';
import homeApi from '../api/homeApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function getProductsSuccess(home) {
  return { type: types.GET_PRODUCTS, home};
}

export function getProductsOld() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return homeApi.getAllProducts().then(courses => {
      dispatch(getProductsSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getProducts() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return homeApi.getAllProducts().then(courses => {
      dispatch(getProductsSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export default getProducts();

/*export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
*/

/* import { LOGIN_ATTEMPT, LOGGED_FAILED, LOGGED_SUCCESSFULLY, GET_PRODUCTS } from '../constants/LoginActionTypes';

export function loginError(error) {
  return dispatch => {
    dispatch({ error, type: LOGGED_FAILED });
  };
}
*/
/*
 * Should add the route like parameter in this method
*/
/*export function loginSuccess(response) {
  return dispatch => {
    dispatch({ response, type: LOGGED_SUCCESSFULLY });
    // router.transitionTo('/dashboard'); // will fire CHANGE_ROUTE in its change handler
  };
}

export function loginRequest(email, password) {
  const user = {email: email, password: password};
  return dispatch => {
    dispatch({ user, type: LOGIN_ATTEMPT });
  };
}

export function getProducts() {
   console.log("Called get Products in Home Actions")
  return dispatch => {
    dispatch({user, type: GET_PRODUCTS });
  };
}*/