import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import inProgressProducts from './landingPageReducer';
import products from './productPageReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

/* combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {nextState[key] = reducers[key](state[key], action);
        return nextState}, {}
        );
  };
};*/

const rootReducer = combineReducers({
  courses,
  authors,
  inProgressProducts,
  products,
  ajaxCallsInProgress
});

export default rootReducer;
