import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Select,Checkbox,Radio, Row, Col,Button, Collapse,DatePicker} from 'antd';
import '../../common/main.less';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Panel = Collapse.Panel;
const Option = Select.Option;
import {ExsitComplain} from './newComplain.jsx';
import {connect} from 'react-redux';
import {initComplain,addComplain,currentComplain,dealComplain} from '../redux/actions/complain.js';
import moment from 'moment';

let DetailComplain = React.createClass({
  getInitialState(){
    return {
      detail:true,
      dealTime:''
    };
  },
  componentWillMount(){
    this.props.dispatch(currentComplain(this.props.params.id.toString()));
    this.setState({
      dealTime:moment().format('YYYY-MM-DD')
    })
    console.log(this.props.current);
  },
 handleSubmitDetail(e){
   e.preventDefault();
   let dealInfo = this.props.form.getFieldsValue();
   dealInfo.dealTime = this.state.dealTime;
   this.props.dispatch(dealComplain(this.props.params.id,dealInfo));
 },
 expandEvent(){

 },
  render(){
    const { getFieldProps } = this.props.form;
    return(
      <div>
        <Collapse defaultActiveKey={['投诉详情']} onChange={this.expandEvent}>
          <Panel header="投诉详情" key="1">
            <ExsitComplain current={this.props.current} detail={this.state.detail}/>
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
                 <Input id="dealMan-input" placeholder="Please enter..." defaultValue="yyf部门经理" {...getFieldProps('dealMan')}/>
               </FormItem>
            </Col>
            <Col span="8">
               <FormItem
                 label="处理时间："
                 id="dealTime"
                 labelCol={{ span: 8 }}
                 wrapperCol={{ span: 12 }}>
                 <DatePicker  defaultValue={this.state.dealTime} format="yyyy-MM-dd" disabled />
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
            <Col span="8" offset="10">
              <Button type="primary" size="large" htmlType="submit">完成</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
});
DetailComplain = Form.create()(DetailComplain);
function mapStateToProps(state){
  return {
    current:state.complainReducer.current,
    todo:state.complainReducer.todo,
    finished:state.complainReducer.finished
  }
};
export default connect(mapStateToProps)(DetailComplain);
