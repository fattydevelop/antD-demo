import {combineReducers } from 'redux';
import navigateReducer from '../reducers/navigate.js';
import initReducer from '../reducers/init.js';


const rootReducer = combineReducers({
  initReducer
});

export default rootReducer;
