import {INIT_EVENT,CURRENT_EVENT} from '../actions/init.js'

const initState = {
  todo:[
    {
      eventId: '201605050001',
      describe:'走保打不开',
      area: '走保单',
      type: '咨询',
      order:'P6',
      status:'处理中',
      startTime:'2016-05-05',
      finishTime:'2016-05-06'
    }, {
      eventId: '201605050002',
      describe:'走保打不开',
      area: '走保单',
      type: '咨询',
      order:'P6',
      status:'处理中',
      startTime:'2016-05-05',
      finishTime:'2016-05-06'
    }, {
      eventId: '201605050003',
      describe:'走保打不开',
      area: '走保单',
      type: '咨询',
      order:'P6',
      status:'处理中',
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
    case CURRENT_EVENT:
        return {

        }
        break;
    default:
        return state;
  }
}
