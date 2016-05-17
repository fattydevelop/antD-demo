import {INIT_EVENT,CURRENT_EVENT,ADD_EVENT,DEAL_EVENT,EVENT_CHANGE} from '../actions/init.js'

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
  current:{},
  users:[
    {
      username:'yyf',
      id:'23549493',
      type:'开发工程师',
      tel:'13301202012',
    },
    {
      username:'fyy',
      id:'13549493',
      type:'客服',
      tel:'13301202012',
    }
  ]
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
          todo:state.todo,
          finished:state.finished,
          current:currentTmp
        };
      }
      else {
        return state;
      }
      break;
    case DEAL_EVENT:
      if(action.id){
        state.todo.forEach((val)=>{
          if(val.eventId==action.id){
            val.dealInfo = action.obj;
            return false;
          }
        })
      }
      return state;
      break;
    case EVENT_CHANGE:
      if(action.arr.length)
        state.todo.forEach((val)=>{
          action.arr.forEach((event)=>{
            if(val.eventId == event){
              val.changeInfo = action.obj;
            }
          });
        });
      return state;
      break;
    default:
      return state;
  }
}
