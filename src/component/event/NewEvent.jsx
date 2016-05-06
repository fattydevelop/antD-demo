import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Select,Checkbox,Radio, Row, Col,Button } from 'antd';
import '../../common/main.less';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;

const NewEvent = React.createClass({
  getInitialState(){
    return {
      eventId:'201605050001',
      emergence:1,
      area:1
    };
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
  render(){
    return(
      <Form horizontal className="NewEvent">
      <Row>
        <Col span="8">
           <FormItem
             label="用户名："
             id="username"
             labelCol={{ span: 8 }}
             wrapperCol={{ span: 12 }}>
             <Input id="username-input" placeholder="Please enter..." />
           </FormItem>
        </Col>
        <Col span="8">
           <FormItem
             label="公司："
             id="company"
             labelCol={{ span: 8 }}
             wrapperCol={{ span: 12 }}>
             <Input id="company-input" placeholder="Please enter..." />
           </FormItem>
        </Col>
        <Col span="8">
          <FormItem
            label="电话："
            id="tel"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 12 }}>
            <Input id="tel-input" placeholder="Please enter..." />
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
              <Input id="serviceName-input" placeholder="Please enter..." />
            </FormItem>
        </Col>
        <Col span="8">
            <FormItem
              label="客服电话："
              id="servceTel"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Input id="servceTel-input" placeholder="Please enter..." />
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
              <Select id="bizArea-select" size="large" defaultValue="www" style={{ width: 200 }}>
                <Option value="www">网络</Option>
                <Option value="insurance">走保</Option>
                <Option value="jianding">鉴定</Option>
              </Select>
            </FormItem>
        </Col>
        <Col span="8">
            <FormItem
              label="事件类型："
              id="eventType"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <Select id="eventType-select" size="large" defaultValue="bad" style={{ width: 200 }}>
                <Option value="bad">故障</Option>
                <Option value="ask">咨询</Option>
                <Option value="need">需求</Option>
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
             <Input type="textarea" id="eventDescribe-textarea" rows="3" />
           </FormItem>
        </Col>
        <Col span="8">
          <FormItem
            label="解决方案："
            id="solution"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}>
            <Input type="textarea" id="control-textarea" rows="3" />
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
              <Input type="upload" id="copy-upload"/>
            </FormItem>
        </Col>
        <Col span="8">
          <FormItem
            label="事件单状态："
            id="status"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 12 }}>
            <Select id="select" size="large" defaultValue="finished" style={{ width: 200 }}>
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
export default NewEvent;
