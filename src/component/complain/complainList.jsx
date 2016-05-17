import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Icon  } from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import '../../common/main.less';

const columns = [{
  title: '投诉单号',
  dataIndex: 'complainId',
  key: 'complainId',
}, {
  title: '投诉主题',
  dataIndex: 'complainTheme',
  key: 'complainTheme',
}, {
  title: '投诉时间',
  dataIndex: 'complainTime',
  key: 'complainTime',
}, {
  title: '投诉状态',
  dataIndex: 'complainStatus',
  key: 'complainStatus',
},{
  title: '操作',
  key: 'operation',
  render(text, record) {
    const url = record.complainId;
    return (
      <span>
        <Link key={record.complainId} to={`/complainList/${record.complainId}`}>操作</Link>
      </span>
    );
  }
}];

const ComplainList = React.createClass({

  render(){
    return(
      <div className="ComplainList">
        <Table columns={columns} dataSource={this.props.todo} rowKey={data=>data.complainId} />
      </div>
    );
  }
});
function mapStateToProps(state){
  return {
    todo:state.complainReducer.todo,
  }
};
export default connect(mapStateToProps)(ComplainList);
