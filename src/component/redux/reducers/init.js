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
      startTime:'2016-05-05',
      finishTime:'2016-05-06'
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
      startTime:'2016-05-05',
      finishTime:'2016-05-06'
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
      startTime:'2016-05-05',
      finishTime:'2016-05-06'
    }
  ],
  finished:[

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
      console.log(action.obj)
      if(action.obj.status=='todo')
        state.todo.push(action.obj)
      else
        state.finished.push(action.obj)
        return {
          todo:state.todo,
          finished:state.finished
        }
        break;
    default:
        return state;
  }
}
