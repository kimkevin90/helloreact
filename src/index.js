import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //App.js임
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <App />,
  document.getElementById('root') //index.html에서 root가져온다
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
