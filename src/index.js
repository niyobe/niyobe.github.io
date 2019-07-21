/* Polyfills */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'es6-promise/auto'
import 'isomorphic-fetch';


/* React Default */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

/* Node Modules */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* View Components */
import App from './App';

/* Stylesheets */
import './css/_index.css';
import './css/_fonts.css';

require.context('./css/', )





render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
