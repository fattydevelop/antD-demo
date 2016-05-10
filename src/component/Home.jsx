import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'antd';
import '../common/main.less';

const Home = React.createClass({
  getInitialState(){
    return {
      logo:'http://d.lanrentuku.com/down/png/0906/webpage-design/webpage-design-11.png',
      welcomeText:'欢迎登陆',
      sysName:'XXXX管理系统',
      user:'yyf'
    };
  },
  render(){
    return(
      <div>home</div>
    );
  }
});
export default Home;
