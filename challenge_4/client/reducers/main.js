import { combineReducers } from 'redux';
import board from './board';
import size from './size.js';
import mines from './mines.js';

var rootReducer = combineReducers({
  board,
  size,
  mines
});

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
