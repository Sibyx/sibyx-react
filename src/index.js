import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './components/Landing';
import * as serviceWorker from './serviceWorker';

require('typeface-nunito');

ReactDOM.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
