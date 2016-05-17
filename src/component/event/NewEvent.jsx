import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Select,Checkbox,Radio, Row, Col,Button,Upload, message, Icon,DatePicker,Message } from 'antd';
import {connect} from 'react-redux';
import {initEvent,addEvent} from '../redux/actions/init.js';
import '../../common/main.less';
import moment from 'moment';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;

const props = {
  name: 'file',
  action: '/upload.do',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 上传成功。`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败。`);
    }
  },
  defaultFileList: [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: 'http://www.baidu.com/xxx.png'
  }, {
    uid: -2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png'
  }]
};

let NewEvent = React.createClass({

  getInitialState(){
    return {
      eventId:'201605050001',
      emergence:1,
      area:1
    };
  },
  componentWillMount(){
    if(this.props.dispatch)
      this.props.dispatch(initEvent());
    let eventIdTemp = moment().format('YYYYMMDD0001');
    if(this.props.todo)
      this.props.todo.forEach((val)=>{
        if(eventIdTemp<=val.eventId)
          eventIdTemp =parseInt(val.eventId)+1;
          eventIdTemp = eventIdTemp.toString();
      })
    this.setState({
      eventId:eventIdTemp
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

    Message.success('保存成功，将在3s后跳转到待办列表')
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
             label="用户名："
             id="username"
             labelCol={{ span: 8 }}
             wrapperCol={{ span: 12 }}>
             <Input id="username-input" name="username" {...getFieldProps('username')}  placeholder="Please enter..."/>
           </FormItem>
        </Col>
        <Col span="8">
           <FormItem
             label="公司："
             id="company"
             labelCol={{ span: 8 }}
             wrapperCol={{ span: 12 }}>
             <Input id="company-input" name="company" {...getFieldProps('company')} placeholder="Please enter..." />
           </FormItem>
        </Col>
        <Col span="8">
          <FormItem
            label="电话："
            id="tel"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 12 }}>
            <Input id="tel-input" name="tel" {...getFieldProps('tel')} placeholder="Please enter..." />
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="8">
            <FormItem
              label="客服："
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Input id="serviceName-input" {...getFieldProps('serviceName')} name="serviceName" placeholder="Please enter..." />
            </FormItem>
        </Col>
        <Col span="8">
            <FormItem
              label="客服电话："
              id="servceTel"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Input id="servceTel-input" {...getFieldProps('servceTel')} placeholder="Please enter..." />
            </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="8">
            <FormItem
              label="事件单号："
              id="eventId"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Input id="eventId-input" disabled value={this.state.eventId} />
            </FormItem>
        </Col>
        <Col span="8">
            <FormItem
              label="业务领域："
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Select id="bizArea" size="large" {...getFieldProps('bizArea', { initialValue: '网络' })} defaultValue="网络" style={{ width: 200 }}>
                <Option value="网络">网络</Option>
                <Option value="走保">走保</Option>
                <Option value="鉴定">鉴定</Option>
              </Select>
            </FormItem>
        </Col>
        <Col span="8">
            <FormItem
              label="事件类型："
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Select id="eventType" size="large" {...getFieldProps('type', { initialValue: '故障' })} defaultValue="故障" style={{ width: 200 }}>
                <Option value="故障">故障</Option>
                <Option value="咨询">咨询</Option>
                <Option value="需求">需求</Option>
              </Select>
            </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="8">
            <FormItem
              label="事件紧急程度："
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Select id="emergence" size="large" {...getFieldProps('emergence', { initialValue: '1' })} defaultValue="1" style={{ width: 200 }} onSelect={this.emergenceChange}>
                <Option value="1">低</Option>
                <Option value="2">中</Option>
                <Option value="3">高</Option>
              </Select>
            </FormItem>
        </Col>
        <Col span="8">
            <FormItem
              label="事件范围级别："
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Select id="eventArea" size="large" {...getFieldProps('eventArea', { initialValue: '1' })}  defaultValue="1" style={{ width: 200 }} onSelect={this.areaChange}>
                <Option value="1">单个</Option>
                <Option value="2">群体</Option>
                <Option value="3">全部</Option>
              </Select>
            </FormItem>
        </Col>
        <Col span="8">
            <FormItem
              label="事件优先级："
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Input id="control" disabled value={this.state.emergence*this.state.area+'级'} />
            </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="8">
           <FormItem
             label="事件描述："
             id="eventDescribe"
             labelCol={{ span: 8 }}
             wrapperCol={{ span: 16 }}>
             <Input type="textarea"  {...getFieldProps('describe')}  id="eventDescribe-textarea" rows="3" />
           </FormItem>
        </Col>
        <Col span="8">
          <FormItem
            label="解决方案："
            id="solution"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}>
            <Input type="textarea"  {...getFieldProps('solution')}  id="solution-textarea" rows="3" />
          </FormItem>

        </Col>
      </Row>
      <Row>
        <Col span="8">
           <FormItem
             label="发生时间："
             id="startTime"
             labelCol={{ span: 8 }}
             wrapperCol={{ span: 16 }}>
              <DatePicker {...getFieldProps('startTime')} format="yyyy-MM-dd"/>
           </FormItem>
        </Col>
        <Col span="8">
          <FormItem
            label="要求解决时间："
            id="endTime"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}>
              <DatePicker {...getFieldProps('endTime')} format="yyyy-MM-dd"/>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="8">
            <FormItem
              label="附件："
              id="copy"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Upload {...props}>
                <Button type="ghost">
                  <Icon type="upload" /> 点击上传
                </Button>
              </Upload>
            </FormItem>
        </Col>
        <Col span="8">
          <FormItem
            label="事件单状态："
            id="status"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 12 }}>
            <Select id="select" size="large" {...getFieldProps('status',{initialValue:'todo'})} defaultValue="todo" style={{ width: 200 }}>
              <Option value="finished">已解决</Option>
              <Option value="todo">未处理</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <FormItem className="buttonGroup" wrapperCol={{ span: 4, offset: 10 }} style={{ marginTop: 24 ,display:this.props.current?"none":"block"}}>
          <Button type="primary" htmlType="submit">保存</Button>
          <Button type="ghost" htmlType="submit">取消</Button>
      </FormItem>
   </Form>
    );
  }
});
NewEvent = Form.create({
  // mapPropsToFields(props){
  //   return {
  //     current: props.current,
  //   }
  // }
})(NewEvent);
function mapStateToProps(state){
  return {
    todo:state.initReducer.todo,
    finished:state.initReducer.finished,
    current:state.initReducer.current
  }
};
let NewEventContainer = connect(mapStateToProps)(NewEvent);
let NewEventCom = {
  ExsitEvent:NewEvent,
  NewEvent:NewEventContainer
}
export default NewEventCom;
