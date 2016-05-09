import React from 'react';
import { DatePicker,Row,Col } from 'antd';
import Sider from './Menu.jsx';
import Header from './Header.jsx';
import NewEvent from './event/NewEvent.jsx';
import WaitEvent from './event/WaitEvent.jsx';
import DetailEvent from './event/DetailEvent.jsx';
import './App.less';
import {connect} from 'react-redux';
import {initEvent} from './redux/actions/init.js';
import { Router, Route, Link,hashHistory } from 'react-router';
/*
* 引入全局mock数据   事件单数据eventData
*/


const App = React.createClass({
  getInitialState(){
    return {
      // eventData:eventData
    }
  },
  componentDidMount(){
    this.props.dispatch(initEvent());
  },
  render(){
    const {store} = this.props;
    return(
      <div>
          <Header/>
          <div className="Main">
            <div className="Sider"><Sider/></div>
            <div className="Content">
              <Router history={hashHistory}>
              <Route path="/">
                <Route path="newEvent" component={NewEvent}></Route>
                <Route path="waitEvent" component={WaitEvent}></Route>
                <Route path="waitEvent/:id" component={DetailEvent}></Route>
                 <Route path="*" component={Sider}></Route>
              </Route>
              </Router>
            </div>
          </div>
      </div>
    );
  }
});
function mapStateToProps(state){
  return {todo:state.todo,
  finished:state.finished}
};
export default connect(null)(App);
