import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  console.log(initialState);
  console.log("initialState");
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
