import React from 'react';
import { DatePicker,Row,Col } from 'antd';
import Sider from './Menu.jsx';
import Header from './Header.jsx';
import NewEvent from './event/NewEvent.jsx';
import WaitEvent from './event/WaitEvent.jsx';
import DetailEvent from './event/DetailEvent.jsx';
import './App.less';
import {connect} from 'react-redux';
import {selectMenu} from './redux/actions/navigate';
import { Router, Route, Link,hashHistory } from 'react-router';

const App = React.createClass({
  render(){
    const {dispatch} = this.props;
    return(
      <div>
          <Header/>
          <div className="Main">
            <div className="Sider"><Sider selectMenu={key => dispatch(selectMenu(key))}/></div>
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
  return {menuKey:state.menuKey}
};
export default connect(mapStateToProps)(App);
