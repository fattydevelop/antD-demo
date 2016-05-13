import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Select,Checkbox,Radio, Row, Col,Button, Collapse} from 'antd';
import '../../common/main.less';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Panel = Collapse.Panel;
const Option = Select.Option;
import {ExsitEvent} from './NewEvent.jsx';
import {connect} from 'react-redux';
import {initEvent,addEvent,currentEvent,dealEvent} from '../redux/actions/init.js';


let DetailEvent = React.createClass({
  getInitialState(){
    return {
      detail:true
    };
  },
  componentWillMount(){
    this.props.dispatch(currentEvent(this.props.params.id.toString()));
    console.log(this.props.current);
  },
 handleSubmitDetail(e){
   e.preventDefault();
   let dealInfo = this.props.form.getFieldsValue();
   this.props.dispatch(dealEvent(this.props.params.id,dealInfo));
 },
 expandEvent(){

 },
  render(){
    const { getFieldProps } = this.props.form;
    return(
      <div>
        <Collapse defaultActiveKey={['事件详情']} onChange={this.expandEvent}>
          <Panel header="事件详情" key="1">
            <ExsitEvent current={this.props.current} detail={this.state.detail}/>
          </Panel>
         </Collapse>
        <hr/>
        <Form horizontal className="DetailEvent" onSubmit={this.handleSubmitDetail}>
          <Row>
            <Col span="8">
               <FormItem
                 label="处理人："
                 id="dealMan"
                 labelCol={{ span: 8 }}
                 wrapperCol={{ span: 12 }}>
                 <Input id="dealMan-input" placeholder="Please enter..." {...getFieldProps('dealMan')}/>
               </FormItem>
            </Col>
            <Col span="8">
               <FormItem
                 label="处理人电话："
                 id="dealTel"
                 labelCol={{ span: 8 }}
                 wrapperCol={{ span: 12 }}>
                 <Input id="dealTel-input" placeholder="Please enter..." {...getFieldProps('dealTel')}/>
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
                 <Input id="dealCause-input" type="textarea" {...getFieldProps('dealCause')}/>
               </FormItem>
            </Col>
            <Col span="8">
               <FormItem
                 label="指导建议："
                 id="dealSuggest"
                 labelCol={{ span: 8 }}
                 wrapperCol={{ span: 12 }}>
                 <Input id="dealSuggest-input" type="textarea" {...getFieldProps('dealSuggest')}/>
               </FormItem>
            </Col>
            <Col span="8">
              <FormItem
                label="处理措施："
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}>
                <Input id="dealSolution-input" type="textarea" {...getFieldProps('dealSolution')}/>
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
                  <Select id="result-select" size="large"  style={{ width: 200 }} {...getFieldProps('result', { initialValue: '结单' })}>
                    <Option value="结单">结单</Option>
                    <Option value="升级需求单">升级需求单</Option>
                    <Option value="升级问题单">升级问题单</Option>
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
DetailEvent = Form.create()(DetailEvent);
function mapStateToProps(state){
  return {
    current:state.initReducer.current,
    todo:state.initReducer.todo,
    finished:state.initReducer.finished
  }
};
export default connect(mapStateToProps)(DetailEvent);
