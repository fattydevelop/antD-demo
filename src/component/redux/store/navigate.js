import {createStore} from 'redux';
import navigateReducer from '../reducers/navigate.js';

export default function navigateStore(initState){
  return createStore(navigateReducer,initState)
}
