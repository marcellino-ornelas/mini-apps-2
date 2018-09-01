import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

export default createStore(
  rootReducer,
  {
    board: [],
    size: 10,
    mines: 10
  },
  applyMiddleware(thunk)
);
