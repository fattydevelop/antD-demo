import {INIT_COMPLAIN,CURRENT_COMPLAIN,ADD_COMPLAIN,DEAL_COMPLAIN} from '../actions/complain.js'

const initState = {
  todo:[
    {
      complainId: '201605050001',
      eventId:'201605050001',
      userId:'yyf111111',
      complainTime:'2016-05-05',
      complainTheme:'鉴定单处理太慢',
      complainContent:'上次提交处理的事件单，处理速度太慢了',
      complainStatus:'未处理'
    }, {
      complainId: '201605050002',
      eventId:'201605050001',
      userId:'yyf111111',
      complainTime:'2016-05-05',
      complainTheme:'鉴定单处理太慢',
      complainContent:'上次提交处理的事件单，处理速度太慢了',
      complainStatus:'未处理'
    }
  ],
  finished:[

  ],
  current:{}
};
export default function init(state=initState,action){
  switch (action.type) {
    case INIT_COMPLAIN:
        return{
          todo:state.todo,
          finished:state.finished
        }
        break;
    case ADD_COMPLAIN:
      if(!action.obj.complainStatus)
        action.obj.complainStatus = '未处理';
      state.todo.push(action.obj);
      return {
        todo:state.todo,
        finished:state.finished
      }
      break;
    case CURRENT_COMPLAIN:
      if(action.id){
        let currentTmp ={};
        state.todo.forEach((val)=>{
          if(val.complainId==action.id){
            currentTmp = val;
            return false;
          }
        });
        state.finished.forEach((val)=>{
          if(val.complainId==action.id){
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
    case DEAL_COMPLAIN:
      if(action.id){
        state.todo.forEach((val)=>{
          if(val.complainId==action.id){
            val.dealInfo = action.obj;
            val.complainStatus = '已处理';
            return false;
          }
        })
      }
      return state;
      break;
    default:
      return state;
  }
}
