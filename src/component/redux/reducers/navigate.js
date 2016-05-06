import {SELECT_MENU} from '../actions/navigate.js'

const initState = {
  menuKey:''
};
export default function navigate(state=initState,action){
  switch (action.type) {
    case SELECT_MENU:
        return{
          menuKey:action.key
        }
    default:
        return state;
  }
}
