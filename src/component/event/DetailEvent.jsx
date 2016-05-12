import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Select,Checkbox,Radio, Row, Col,Button } from 'antd';
import '../../common/main.less';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;
import {ExsitEvent} from './NewEvent.jsx';
import {connect} from 'react-redux';
import {initEvent,addEvent,currentEvent} from '../redux/actions/init.js';


const DetailEvent = React.createClass({
  getInitialState(){
    return {
      eventId:'201605050001',
      emergence:1,
      area:1,
      detail:true
    };
  },
  componentWillMount(){
    this.props.dispatch(currentEvent(this.props.params.id.toString()))
    console.log(this.props.current)
  },
 handleSubmit(){
   console.log(this)
 },
  render(){
    return(
      <div>
        <ExsitEvent current={this.props.current}/>
        <hr/>
        <Form horizontal className="DetailEvent" onSubmit={this.handleSubmit}>
          <Row>
            <Col span="8">
               <FormItem
                 label="处理人："
                 id="dealMan"
                 labelCol={{ span: 8 }}
                 wrapperCol={{ span: 12 }}>
                 <Input id="dealMan-input" placeholder="Please enter..." />
               </FormItem>
            </Col>
            <Col span="8">
               <FormItem
                 label="处理人电话："
                 id="dealTel"
                 labelCol={{ span: 8 }}
                 wrapperCol={{ span: 12 }}>
                 <Input id="dealTel-input" placeholder="Please enter..." />
               </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="8">
               <FormItem
                 label="事件原因："
                 id="dealCause"
                 labelCol={{ span: 8 }}
                 wrapperCol={{ span: 12 }}>
                 <Input id="dealCause-input" type="textarea"/>
               </FormItem>
            </Col>
            <Col span="8">
               <FormItem
                 label="指导建议："
                 id="dealSuggest"
                 labelCol={{ span: 8 }}
                 wrapperCol={{ span: 12 }}>
                 <Input id="dealSuggest-input" type="textarea"/>
               </FormItem>
            </Col>
            <Col span="8">
              <FormItem
                label="处理措施："
                id="dealSolution"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}>
                <Input id="tel-input" type="textarea"/>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="8">
                <FormItem
                  label="去向："
                  id="result"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 12 }}>
                  <Select id="bizArea-select" size="large" defaultValue="finsih" style={{ width: 200 }}>
                    <Option value="finsih">结单</Option>
                    <Option value="proNeed">升级需求单</Option>
                    <Option value="proQuestion">升级问题单</Option>
                  </Select>
                </FormItem>
            </Col>
            <Col span="8" offset="1">
              <Button type="primary" htmlType="submit">完成</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
});
function mapStateToProps(state){
  return {
    current:state.initReducer.current,
  }
};
export default connect(mapStateToProps)(DetailEvent);
