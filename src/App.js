import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Main from './views/Main';
import User from './views/User';


function App() {
  const browserrouter_basename = process.env.PUBLIC_URL;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>        
      </header>
      <div>
        <BrowserRouter basename={browserrouter_basename}>
          <Switch>
            <Route path="/main" component={Main} onEnter={(e) => {console.log('enter');}} />
            <Route path="/user" component={User} />
          </Switch>
        </BrowserRouter>
      </div>       
    </div>

  );
}

export default App;
