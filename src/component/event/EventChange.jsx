import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Icon  } from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import '../../common/main.less';
import { Form, Input, Select,Checkbox,Radio, Row, Modal,Col,Button,Upload, message,DatePicker,Message } from 'antd';
import {eventChange} from '../redux/actions/init.js';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;
const userColumns=[{
  title: '用户ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '用户名',
  dataIndex: 'username',
  key: 'username',
}, {
  title: '用户类型',
  dataIndex: 'type',
  key: 'type',
}, {
  title: '联系方式',
  dataIndex: 'tel',
  key: 'tel',
}];
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
}];


let EventChange = React.createClass({
  getInitialState(){
    return {
      visible: false,
      serviceName:'',
      serviceId:'',
      serviceText:'',
      eventArr:[]
    };
  },
  showModal() {
    this.setState({
      visible: true
    });
  },
  handleOk() {
   console.log('点击了确定');
   this.setState({
     visible: false,
   });
  },
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  },
  onSelectChange(selectedRowKeys) {
   console.log('selectedRowKeys changed: ', selectedRowKeys);
   this.setState({
     eventArr:selectedRowKeys
   })
  },
  handleSubmit(e){
    e.preventDefault();
    let me = this;
    let newBill ={
      changeWay:me.props.form.getFieldValue('changeWay'),
      serviceId:me.state.serviceId
    }
    this.props.dispatch(eventChange(this.state.eventArr,newBill))
  },
  selectUser(record,index){
    console.log('sleclt',record);
    this.setState({
      visible:false,
      serviceName:record.username,
      serviceId:record.id,
      serviceText:record.id+'|'+record.username
    });
    this.props.form.setFieldsValue({serviceText:record.id+'|'+record.username});
  },
  render(){
    const { getFieldProps } = this.props.form;
    const rowSelection = {
      onChange: this.onSelectChange
    };
    return(
      <div className="WaitEvent">
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.props.todo} rowKey={data=>data.eventId} />
        <Form horizontal className="NewEvent" onSubmit={this.handleSubmit}>
          <Row>
            <Col span="6">
              <FormItem
                label="指派人员："
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}>
                <Input  name="serviceText" {...getFieldProps('serviceText')} placeholder="Please enter..." onClick={this.showModal}/>
              </FormItem>
            </Col>
            <Col span="6">
              <FormItem
                label="事件升级："
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}>
                <Select id="bizArea" size="large"  {...getFieldProps('changeWay', { initialValue: '升级问题单' })}  style={{ width: 200 }}>
                  <Option value="升级问题单">升级问题单</Option>
                  <Option value="升级需求单">升级需求单</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="6">
              <FormItem className="buttonGroup" wrapperCol={{ span: 4, offset: 10 }}>
                  <Button type="primary" htmlType="submit">处理</Button>
              </FormItem>
            </Col>
          </Row>
        </Form>
        <Modal title="事件列表" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel} width="720">
              <Table  columns={userColumns} dataSource={this.props.users} rowKey={data=>data.id} onRowClick={this.selectUser}/>
        </Modal>
      </div>
    );
  }
});
EventChange = Form.create({
})(EventChange);
function mapStateToProps(state){
  return {
    todo:state.initReducer.todo,
    users:state.initReducer.users
  }
};
export default connect(mapStateToProps)(EventChange);
