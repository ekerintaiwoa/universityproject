import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,applyMiddleware} from 'redux'
import App from './App';
import { Provider } from 'react-redux';
import reducers from './reducers' ;
import mypromiseMiddleware from 'redux-promise'
import reportWebVitals from './reportWebVitals';

const mystore = applyMiddleware(mypromiseMiddleware)(createStore)

ReactDOM.render(
  <Provider store={mystore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
