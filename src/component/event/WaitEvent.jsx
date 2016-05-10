import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Icon  } from 'antd';
import {connect} from 'react-redux';

import '../../common/main.less';

const columns = [{
  title: '事件单号',
  dataIndex: 'eventId',
  key: 'eventId',
  // render(text) {
  //   return <a href="#/waitEvent/">{text}</a>;
  // }
}, {
  title: '事件概述',
  dataIndex: 'describe',
  key: 'describe',
}, {
  title: '事件领域',
  dataIndex: 'area',
  key: 'area',
}, {
  title: '事件类型',
  dataIndex: 'type',
  key: 'type',
}, {
  title: '事件优先级',
  dataIndex: 'order',
  key: 'order',
}, {
  title: '事件状态',
  dataIndex: 'status',
  key: 'status',
}, {
  title: '起始时间',
  dataIndex: 'startTime',
  key: 'startTime',
}, {
  title: '要求完成时间',
  dataIndex: 'finishTime',
  key: 'finishTime',
},{
  title: '操作',
  key: 'operation',
  render(text, record) {
    const url = record.eventId;
    return (
      <span>
        <a href= {'#/WaitEvent/'+record.eventId}>操作</a>
      </span>
    );
  }
}];
const data = [{
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
}];

const WaitEvent = React.createClass({

  render(){
    return(
      <div className="WaitEvent">
        <Table columns={columns} dataSource={this.props.todo} rowKey={data=>data.eventId} />
      </div>
    );
  }
});
function mapStateToProps(state){
  return {
    todo:state.initReducer.todo,
  }
};
export default connect(mapStateToProps)(WaitEvent);
