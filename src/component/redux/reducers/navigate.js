import {SELECT_MENU} from '../actions/navigate.js'

const initState = {
  menuKey:'123'
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
