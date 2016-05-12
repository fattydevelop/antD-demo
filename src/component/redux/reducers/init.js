import {INIT_EVENT,CURRENT_EVENT,ADD_EVENT} from '../actions/init.js'

const initState = {
  todo:[
    {
      eventId: '201605050001',
      describe:'走保打不开',
      username:'yyf',
      company:'gl',
      tel:'18608010500',
      serviceName:'fafa',
      servceTel:'ss',
      bizArea:'网络',
      area: '走保单',
      type: '故障',
      solution:'buzhidao',
      order:'P6',
      status:'todo',
      statusText:'处理中',
      startTime:'2016-05-05',
      endTime:'2016-05-06'
    }, {
      eventId: '201605050002',
      describe:'走保打不开',
      username:'yyf',
      company:'gl',
      tel:'18608010500',
      serviceName:'fafa',
      servceTel:'ss',
      bizArea:'网络',
      area: '走保单',
      type: '故障',
      solution:'buzhidao',
      order:'P6',
      status:'todo',
      statusText:'处理中',
      startTime:'2016-05-05',
      endTime:'2016-05-06'
    }, {
      eventId: '201605050003',
      describe:'走保打不开',
      username:'yyf',
      company:'gl',
      tel:'18608010500',
      serviceName:'fafa',
      servceTel:'ss',
      bizArea:'网络',
      area: '走保单',
      type: '故障',
      solution:'buzhidao',
      order:'P6',
      status:'todo',
      statusText:'处理中',
      startTime:'2016-05-05',
      endTime:'2016-05-06'
    }
  ],
  finished:[

  ],
  current:{}
};
export default function init(state=initState,action){
  switch (action.type) {
    case INIT_EVENT:
        return{
          todo:state.todo,
          finished:state.finished
        }
        break;
    case ADD_EVENT:
      if(action.obj.status=='todo'){
        action.obj.statusText = '处理中';
        state.todo.push(action.obj);
      }
      else{
        action.obj.statusText = '处理完成';
        state.finished.push(action.obj)
      }
      return {
        todo:state.todo,
        finished:state.finished
      }
      break;
    case CURRENT_EVENT:
      if(action.id){
        let currentTmp ={};
        state.todo.forEach((val)=>{
          if(val.eventId==action.id){
            currentTmp = val;
            return false;
          }
        });
        state.finished.forEach((val)=>{
          if(val.eventId==action.id){
            currentTmp = val;
            return false;
          }
        });
        return  {
          current:currentTmp
        };
      }
      else {
        return state;
      }
      break;
    default:
      return state;
  }
}
