import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Icon  } from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import '../../common/main.less';

const columns = [{
  title: '事件单号',
  dataIndex: 'eventId',
  key: 'eventId',
}, {
  title: '事件概述',
  dataIndex: 'describe',
  key: 'describe',
}, {
  title: '事件领域',
  dataIndex: 'bizArea',
  key: 'bizArea',
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
  dataIndex: 'statusText',
  key: 'statusText',
}, {
  title: '起始时间',
  dataIndex: 'startTime',
  key: 'startTime',
}, {
  title: '要求完成时间',
  dataIndex: 'endTime',
  key: 'endTime',
},{
  title: '操作',
  key: 'operation',
  render(text, record) {
    const url = record.eventId;
    return (
      <span>
        <Link key={record.eventId} to={`/waitEvent/${record.eventId}`}>操作</Link>
      </span>
    );
  }
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
