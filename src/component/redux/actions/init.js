export const INIT_EVENT ='INIT_EVENT';
export const CURRENT_EVENT = 'CURRENT_EVENT';
export const ADD_EVENT ='ADD_EVENT';
export const DEAL_EVENT='DEAL_EVENT';
export const EVENT_CHANGE="EVENT_CHANGE"
export function initEvent(){
  return {type:INIT_EVENT};
}
export function currentEvent(id){
  return {type:CURRENT_EVENT,id};
}
export function addEvent(obj){
  return {type:ADD_EVENT,obj}
}
export function dealEvent(id,obj){
  return {type:DEAL_EVENT,id,obj}
}
export function eventChange(arr,obj){
  return {type:EVENT_CHANGE,arr,obj}
}
