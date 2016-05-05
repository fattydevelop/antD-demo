import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'antd';
import '../common/main.less';

const Header = React.createClass({
  getInitialState(){
    return {
      logo:'http://d.lanrentuku.com/down/png/0906/webpage-design/webpage-design-11.png',
      welcomeText:'欢迎登陆',
      sysName:'XXXX管理系统',
      user:'yyf'
    };
  },
  chanageTheme(value){
    this.setState({
      theme:value?'dark':'light'
    })
  },
  handleClick(e){
    console.log('click',e);
    thi.setState({
      current:e.key
    });
  },
  render(){
    return(
      <Row type="flex" justify="space-around" align="middle" className="header">
        <Col offset="1" span="2"><img src={this.state.logo} className="logo"/></Col>
        <Col span="8" offset="1" className="sysName">{this.state.sysName}</Col>
        <Col offset="8" span="2" className="welcomeText">{this.state.welcomeText}:{this.state.user}</Col>
      </Row>
    );
  }
});
export default Header;
