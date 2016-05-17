import {combineReducers } from 'redux';
import navigateReducer from '../reducers/navigate.js';
import initReducer from '../reducers/init.js';
import complainReducer from '../reducers/complain.js';

const rootReducer = combineReducers({
  initReducer,
  complainReducer
});

export default rootReducer;
