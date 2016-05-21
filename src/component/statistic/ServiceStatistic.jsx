import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Select,Checkbox,Radio, Row, Col,Button, Collapse,DatePicker,Message} from 'antd';
import '../../common/main.less';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Panel = Collapse.Panel;
const Option = Select.Option;
import {connect} from 'react-redux';
import {initEvent,addEvent,currentEvent,dealEvent} from '../redux/actions/init.js';
// var G2 = require('./g2.chart.js');
var chart = {};
let ServiceStatistic = React.createClass({
  getInitialState(){
    return {
      data:[],
      startTime:'',
      endTime:''
    }
  },
  getStatistic(startTime,endTime){
    let eventList = this.props.todo.concat(this.props.finished);
    let serviceArr = [];
    let resultService = [];

    eventList.forEach((event)=>{
      if((startTime==''||endTime=='')||(event.startTime>=startTime&&event.endTime<=endTime)){
        let serviceName = event.serviceName;
        let statisfy = event.statisfy>=3?1:0;
        let num = 1;
        let order = 0;
        if(event.order>='P3')
          order=1;
        serviceArr.push({
          serviceName:serviceName,
          statisfy:statisfy,
          num:num,
          order:order
        })
      };
      if(startTime>endTime)
        return false;
    });
    serviceArr.forEach((service)=>{
      let flag = false;
      resultService.forEach((result)=>{
        if(service.serviceName==result.serviceName){
          flag = true;
          ++result.num;
          result.statisfy += service.statisfy;
          result.order += service.order;
        }
      });
      if(!flag)
        resultService.push(service);
    })
    let charData = [];
    resultService.forEach((result)=>{
      let numObj = {
        serviceName:result.serviceName,
        type:'事件数量',
        value:result.num
      };
      charData.push(numObj);
      let statisfyObj = {
        serviceName:result.serviceName,
        type:'满意度达到满意',
        value:result.statisfy
      };
      charData.push(statisfyObj);
      let orderObj = {
        serviceName:result.serviceName,
        type:'紧急度P3以上',
        value:result.order
      }
      charData.push(orderObj);
    })
    this.setState({
      data:charData
    })
  },
  componentWillMount(){
    this.getStatistic(this.state.startTime,this.state.endTime);
  },
  componentDidUpdate(){
    if(this.state.data.length==0)
      Message.error('该时间范围内无统计数据');
    else
      chart.changeData(this.state.data);
  },
  startTimeChange(e){
    this.setState({
      startTime:e.toISOString().slice(0,10)
    });
    this.getStatistic(e.toISOString().slice(0,10),this.state.endTime);
  },
  endTimeChange(e){
    this.setState({
      endTime:e.toISOString().slice(0,10)
    });
    this.getStatistic(this.state.startTime,e.toISOString().slice(0,10));
  },
  componentDidMount(){
    var Stat = G2.Stat;
    chart = new G2.Chart({
        id: 'fromChart', // 指定图表容器 ID
        width : 800, // 指定图表宽度
        height : 400, // 指定图表高度
      });
      chart.legend({
        position: 'bottom'
      })
    chart.source(this.state.data);
      chart.col('serviceName',{alias:'客服'});
      chart.col('type',{alias: '统计类型'});
      chart.col('value',{alias: '数量'});
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart.intervalDodge().position(Stat.summary.mean('serviceName*value')).color('type');
      // Step 4: 渲染图表
      chart.render();
  },

  render(){
    const { getFieldProps } = this.props.form;
    return(
      <div className="fromStatistic">
        <div id="searchBar">
          <Form horizontal className="NewEvent" onSubmit={this.handleSubmit}>
          <Row>
            <Col span="8">
            <FormItem
              label="开始时间："
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <DatePicker value={this.state.startTime} format="yyyy-MM-dd" onChange={this.startTimeChange}/>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem
              label="结束时间："
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}>
              <DatePicker value={this.state.endTime} format="yyyy-MM-dd" onChange={this.endTimeChange}/>
            </FormItem>
            </Col>
          </Row>
          </Form>
        </div>
        <div id="fromChart"></div>
      </div>
    );
  }
});
ServiceStatistic = Form.create({
})(ServiceStatistic);
function mapStateToProps(state){
  return {
    current:state.initReducer.current,
    todo:state.initReducer.todo,
    finished:state.initReducer.finished
  }
};
export default connect(mapStateToProps)(ServiceStatistic);
