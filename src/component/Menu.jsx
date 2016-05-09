import React from 'react';
import ReactDOM from 'react-dom';
import {Menu,Icon,Switch} from 'antd';

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
    this.setState({
      current:e.key
    })
   this.props.selectMenu(e.key);
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
            <Menu.Item key="0">事件单录入</Menu.Item>
            <Menu.Item key="1">事件分配</Menu.Item>
            <Menu.Item key="2">事件升级分配</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="file" /><span>知识库管理</span></span>}>
            <Menu.Item key="5">知识审核</Menu.Item>
            <Menu.Item key="6">知识查询</Menu.Item>
            <Menu.Item key="7">知识提交</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="mail" /><span>消息管理</span></span>}>
            <Menu.Item key="9">编辑平台通知</Menu.Item>
            <Menu.Item key="10">推送通知</Menu.Item>
            <Menu.Item key="12">投诉反馈</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="bar-chart" /><span>统计分析管理</span></span>}>
            <Menu.Item key="9">事件类型统计</Menu.Item>
            <Menu.Item key="10">事件进度统计</Menu.Item>
            <Menu.Item key="12">人员统计</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title={<span><Icon type="setting" /><span>基础信息管理</span></span>}>
            <Menu.Item key="9">用户增加</Menu.Item>
            <Menu.Item key="10">权限管理</Menu.Item>
            <Menu.Item key="12">密码管理</Menu.Item>
            <Menu.Item key="13">用户信息维护</Menu.Item>
          </SubMenu>
        </Menu>v
      </div>
    );
  }
});
export default Sider;
