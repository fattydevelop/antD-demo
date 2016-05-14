export const INIT_COMPLAIN ='INIT_COMPLAIN';
export const CURRENT_COMPLAIN = 'CURRENT_COMPLAIN';
export const ADD_COMPLAIN ='ADD_COMPLAIN';
export const DEAL_COMPLAIN='DEAL_COMPLAIN';

export function initComplain(){
  return {type:INIT_COMPLAIN};
}
export function currentComplain(id){
  return {type:CURRENT_COMPLAIN,id};
}
export function addComplain(obj){
  return {type:ADD_COMPLAIN,obj}
}
export function dealComplain(id,obj){
  return {type:DEAL_COMPLAIN,id,obj}
}
