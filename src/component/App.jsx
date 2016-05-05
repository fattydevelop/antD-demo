import React from 'react';
import { DatePicker,Row,Col } from 'antd';
import Sider from './Menu.jsx';
import Header from './Header.jsx';
import NewEvent from './event/NewEvent.jsx'
import './App.less';

const App = () =>(
  <div>
    <Header/>
    <div className="Main">
      <div className="Sider"><Sider/></div>
      <div className="Content"><NewEvent/></div>
    </div>
  </div>

)
export default App;
