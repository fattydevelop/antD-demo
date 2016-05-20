import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Select,Checkbox,Radio, Row, Col,Button, Collapse,DatePicker} from 'antd';
import '../../common/main.less';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Panel = Collapse.Panel;
const Option = Select.Option;
import {connect} from 'react-redux';
import {initEvent,addEvent,currentEvent,dealEvent} from '../redux/actions/init.js';
// var G2 = require('./g2.chart.js');
var chart = {};
let EventStatistic = React.createClass({
  getInitialState(){
    return {
      data:[],
      startTime:'',
      endTime:''
    }
  },
  getStatistic(startTime,endTime){
    let eventList = this.props.todo.concat(this.props.finished);
    let ask =0,need=0,question=0;
    eventList.forEach((event)=>{
      if(startTime==''||endTime==''){
        if(event.type=='故障')
          ++question;
        else if(event.type=='咨询')
          ++ask;
        else
          ++need;
      };
      if(startTime>endTime)
        return false;
      if(event.startTime>=startTime&&event.endTime<=endTime){
          if(event.type=='故障')
            ++question;
          else if(event.type=='咨询')
            ++ask;
          else {
            ++need;
          }
        }
    });
    console.log(question,ask,need);
    this.setState({
      data:[
        {genre:'故障',num:question},
        {genre:'咨询',num:ask},
        {genre:'需求',num:need}
      ]
    })
  },
  componentWillMount(){
    this.getStatistic(this.state.startTime,this.state.endTime);
  },
  componentDidUpdate(){
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
    chart = new G2.Chart({
        id: 'eventChart', // 指定图表容器 ID
        width : 800, // 指定图表宽度
        height : 400 // 指定图表高度
      });
    chart.source(this.state.data, {
        genre: {
          alias: '事件类型' // 列定义，定义该属性显示的别名
        },
        num: {
          alias: '发生次数'
        }
      });
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart.interval().position('genre*num').color('genre')
      // Step 4: 渲染图表
      chart.render();
  },

  render(){
    const { getFieldProps } = this.props.form;
    return(
      <div className="eventStatistic">
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
        <div id="eventChart"></div>
      </div>
    );
  }
});
EventStatistic = Form.create({
  // mapPropsToFields(props){
  //   return {
  //     current: props.current,
  //   }
  // }
})(EventStatistic);
function mapStateToProps(state){
  return {
    current:state.initReducer.current,
    todo:state.initReducer.todo,
    finished:state.initReducer.finished
  }
};
export default connect(mapStateToProps)(EventStatistic);
