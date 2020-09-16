import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store/store';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
