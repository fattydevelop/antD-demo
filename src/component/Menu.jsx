import React from 'react';
import ReactDOM from 'react-dom';
import {Menu,Icon,Switch} from 'antd';
import { Router, Route, Link, browserHistory } from 'react-router';

const SubMenu = Menu.SubMenu;

const Sider = React.createClass({
  getInitialState(){
    return {
      theme:'dark'
    };
  },
  componentWillMount(){
    console.log('slider',this.props);
  },
  changeTheme(value){
    console.log(value)
    this.setState({
      theme:value?'light':'dark'
    })
  },
  selectMenu(e){
    console.log('click',e);
    this.props.changePage(e.key);
  //  this.props.selectMenu(e.key);
  },
  render(){
    const {dispatch} = this.props;
    return(
      <div>
        <Menu theme={this.state.theme}
          onClick={this.selectMenu}
          style={{ width: 240 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline">
          <Switch onChange={this.changeTheme} checkedChildren="亮" unCheckedChildren="暗" />
          <SubMenu key="sub1" title={<span><Icon type="calendar" /><span>事件单管理</span></span>}>
            <Menu.Item key="newEvent">事件单录入</Menu.Item>
            <Menu.Item key="waitEvent">待办事件</Menu.Item>
            <Menu.Item key="eventChange">事件升级分配</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="file" /><span>知识库管理</span></span>}>
            <Menu.Item key="3">知识审核</Menu.Item>
            <Menu.Item key="4">知识查询</Menu.Item>
            <Menu.Item key="5">知识提交</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="mail" /><span>消息管理</span></span>}>
            <Menu.Item key="6">编辑平台通知</Menu.Item>
            <Menu.Item key="7">推送通知</Menu.Item>
            <Menu.Item key="8">投诉反馈</Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" title={<span><Icon type="bar-chart" /><span>投诉管理</span></span>}>
            <Menu.Item key="newComplain">新增投诉</Menu.Item>
            <Menu.Item key="complainList">投诉列表</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="bar-chart" /><span>统计分析管理</span></span>}>
            <Menu.Item key="9">事件类型统计</Menu.Item>
            <Menu.Item key="10">事件进度统计</Menu.Item>
            <Menu.Item key="11">人员统计</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title={<span><Icon type="setting" /><span>基础信息管理</span></span>}>
            <Menu.Item key="12">用户增加</Menu.Item>
            <Menu.Item key="13">权限管理</Menu.Item>
            <Menu.Item key="14">密码管理</Menu.Item>
            <Menu.Item key="15">用户信息维护</Menu.Item>
          </SubMenu>
        </Menu>v
      </div>
    );
  }
});
export default Sider;
