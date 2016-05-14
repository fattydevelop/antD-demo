import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Select,Checkbox,Radio, Modal,Row, Col,Button, Collapse,Table} from 'antd';
import '../../common/main.less';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Panel = Collapse.Panel;
const Option = Select.Option;
import {connect} from 'react-redux';
import {initComplain,addComplain,currentComplain,dealComplain} from '../redux/actions/complain.js';
import moment from 'moment';
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
        <a>选择</a>
      </span>
    );
  }
}];
let NewComplain = React.createClass({
  getInitialState(){
    return {
      complainId:'201605050001',
      visible: false
    };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
   console.log('点击了确定');
   this.setState({
     visible: false,
   });
  },
  selectEvent(record,index){
    console.log(record);
    this.props.form.setFieldsValue({eventId:record.eventId});
    this.setState({
      visible:false
    })
  },
  handleCancel(e) {
  console.log(e);
  this.setState({
    visible: false,
  });
  },
  componentWillMount(){
    if(this.props.dispatch)
      this.props.dispatch(initComplain());
    let complainIdTemp = moment().format('YYYYMMDD0001');
    if(this.props.todo)
      this.props.todo.forEach((val)=>{
        if(complainIdTemp<=val.complainId)
          complainIdTemp =parseInt(val.complainId)+1;
          complainIdTemp = complainIdTemp.toString();
      })
    this.setState({
      complainId:complainIdTemp
    });
  },
  componentDidMount(){
    if(this.props.detail)
      this.props.form.setFieldsValue(this.props.current);
  },
  emergenceChange(e){
    console.log('select',e);
    this.setState({
      emergence:e
    });
    console.log(this);
  },
  areaChange(e){
    console.log('select',e);
    this.setState({
      area:e
    });
  },
  handleSubmit(e){
    e.preventDefault();
    let newBill = this.props.form.getFieldsValue();
    newBill.startTime = this.props.form.getFieldValue('startTime')?this.props.form.getFieldValue('startTime').toISOString().slice(0,10):null;
    newBill.endTime = this.props.form.getFieldValue('endTime')?this.props.form.getFieldValue('endTime').toISOString().slice(0,10):null;
    newBill.eventId = this.state.eventId;
    newBill.order = 'P'+this.state.area*this.state.emergence;
    this.props.dispatch(addEvent(newBill));

    Message.success('保存成功，将在3s后跳转到投诉列表')
    window.setTimeout(()=>{
      window.location.hash = '/waitEvent';
    },3000)
  },
  render(){
    const { getFieldProps } = this.props.form;
    return(
      <Form horizontal className="NewEvent" onSubmit={this.handleSubmit}>
      <Row>
        <Col span="8">
            <FormItem
              label="投诉单号："
              id="complainId"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Input id="complainId-input" disabled value={this.state.complainId} />
            </FormItem>
        </Col>
        <Col span="8">
            <FormItem
              label="投诉客服号："
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Input id="serviceId" {...getFieldProps('serviceId')} />
            </FormItem>
        </Col>
        <Col span="8">
            <FormItem
              label="事件查询："
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <div>
                <Input id="eventId" {...getFieldProps('eventId')} onClick={this.showModal}/>
                <Modal title="事件列表" visible={this.state.visible}
                  onOk={this.handleOk} onCancel={this.handleCancel} width="720">
                  <Table columns={columns} dataSource={this.props.todo} rowKey={data=>data.eventId} onRowClick={this.selectEvent}/>
                </Modal>
              </div>
            </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="8">
           <FormItem
             label="投诉时间："
             labelCol={{ span: 8 }}
             wrapperCol={{ span: 16 }}>
              <Input {...getFieldProps('complainTime')} format="yyyy-MM-dd"/>
           </FormItem>
        </Col>
        <Col span="8">
          <FormItem
            label="投诉主题："
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}>
            <Input type="textarea"  {...getFieldProps('complainTheme')}  id="eventDescribe-textarea" rows="3" />
          </FormItem>
        </Col>
        <Col span="8">
          <FormItem
            label="投诉内容："
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}>
            <Input type="textarea"  {...getFieldProps('complainContent')}  id="eventDescribe-textarea" rows="3" />
          </FormItem>
        </Col>
      </Row>
      <FormItem className="buttonGroup" wrapperCol={{ span: 4, offset: 10 }} style={{ marginTop: 0 }}>
          <Button type="primary" htmlType="submit">保存</Button>
      </FormItem>
   </Form>
    );
  }
});
NewComplain = Form.create({
  // mapPropsToFields(props){
  //   return {
  //     current: props.current,
  //   }
  // }
})(NewComplain);
function mapStateToProps(state){
  return {
    todo:state.initReducer.todo,
    finished:state.initReducer.finished,
    current:state.initReducer.current
  }
};
let NewComplainContainer = connect(mapStateToProps)(NewComplain);
let NewComp = {
  ExsitComplain:NewComplain,
  NewComplainContainer:NewComplainContainer
}
export default NewComp;
