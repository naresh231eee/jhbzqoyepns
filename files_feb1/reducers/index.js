import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import inProgressProducts from './landingPageReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  inProgressProducts,
  ajaxCallsInProgress
});

export default rootReducer;
