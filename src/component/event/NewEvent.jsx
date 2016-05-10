import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Select,Checkbox,Radio, Row, Col,Button,Upload, message, Icon} from 'antd';
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
    this.props.dispatch(initEvent());
    let eventIdTemp = moment().format('YYYYMMDD0001');
    this.props.todo.forEach((val)=>{
      if(eventIdTemp<=val.eventId)
        eventIdTemp =parseInt(val.eventId)+1;
        eventIdTemp = eventIdTemp.toString();
    })
    this.setState({
      eventId:eventIdTemp
    });
    window.location.hash='waitEvent';
  },
  emergenceChange(e){
    console.log('select',e);
    this.setState({
      emergence:e
    });
  },
  areaChange(e){
    console.log('select',e);
    this.setState({
      area:e
    });
  },
  handleSubmit(e){
    e.preventDefault();
    console.log(this.props.todo)
    let newBill = this.props.form.getFieldsValue();
    newBill.order = 'p'+this.state.area*this.state.emergence;
    this.props.dispatch(addEvent(newBill));

    // newBill.eventId = this.state.eventId;
    // newBill.emergence = this.state.emergence;
    // newBill.area = this.state.area;
    // newBill.order = this.state.area*this.state.emergence;
    // if(newBill.status=='todo')
    //   this.props.eventData.todo.push(newBill);
    // else if(newBill.status=='finished')
    //   this.props.eventData.finished.push(newBill);
    // console.log(this.props);
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
             <Input id="username-input" name="username" {...getFieldProps('username')} placeholder="Please enter..." />
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
              id="serviceName"
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
              id="bizArea"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Select id="bizArea-select" size="large" {...getFieldProps('bizArea', { initialValue: 'www' })} defaultValue="www" style={{ width: 200 }}>
                <Option value="网络">网络</Option>
                <Option value="走保">走保</Option>
                <Option value="鉴定">鉴定</Option>
              </Select>
            </FormItem>
        </Col>
        <Col span="8">
            <FormItem
              label="事件类型："
              id="eventType"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Select id="eventType-select" size="large" {...getFieldProps('type', { initialValue: 'bad' })} defaultValue="bad" style={{ width: 200 }}>
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
              id="emergence"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Select id="emergence-select" size="large" defaultValue="1" style={{ width: 200 }} onSelect={this.emergenceChange}>
                <Option value="1">低</Option>
                <Option value="2">中</Option>
                <Option value="3">高</Option>
              </Select>
            </FormItem>
        </Col>
        <Col span="8">
            <FormItem
              label="事件范围级别："
              id="eventArea-input"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Select id="eventArea-select" size="large" defaultValue="1" style={{ width: 200 }} onSelect={this.areaChange}>
                <Option value="1">单个</Option>
                <Option value="2">群体</Option>
                <Option value="3">全部</Option>
              </Select>
            </FormItem>
        </Col>
        <Col span="8">
            <FormItem
              label="事件优先级："
              id="serviceName-input"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Input id="control-input" disabled value={this.state.emergence*this.state.area+'级'} />
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
      <FormItem className="buttonGroup" wrapperCol={{ span: 4, offset: 10 }} style={{ marginTop: 24 ,display:this.props.detail?"none":"block"}}>
          <Button type="primary" htmlType="submit">保存</Button>
          <Button type="ghost" htmlType="submit">取消</Button>
      </FormItem>
   </Form>
    );
  }
});
NewEvent = Form.create()(NewEvent)
function mapStateToProps(state){
  return {
    todo:state.initReducer.todo,
    finished:state.initReducer.finished
  }
};
export default connect(mapStateToProps)(NewEvent);
