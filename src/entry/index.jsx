import '../common/lib';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../component/redux/store/configureStore.dev.js';
import DevTools from '../component/DevTools.js'
const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <div>
      <App/>
    </div>
  </Provider>,
document.getElementById('react-content'));
