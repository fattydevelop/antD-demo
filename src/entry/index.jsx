import '../common/lib';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import Store from '../component/redux/store/navigate.js';
ReactDOM.render(
  <Provider store={Store()}>
    <App />
  </Provider>,
  document.getElementById('react-content'));
