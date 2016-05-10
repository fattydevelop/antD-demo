export const INIT_EVENT ='INIT_EVENT';
export const CURRENT_EVENT = 'CURRENT_EVENT';
export const ADD_EVENT ='ADD_EVENT';

export function initEvent(){
  return {type:INIT_EVENT};
}
export function currentEvent(id){
  return {type:CURRENT_EVENT,id};
}
export function addEvent(obj){
  return {type:ADD_EVENT,obj}
}
