import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './css/App.css';

import Main      from './views/Main';
import User      from './views/User';
import Sequelize from './views/main/Sequelize';


class App extends React.Component {
  constructor (props) {
    super(props);

    this.is_mounted = false;
    this.state = {
      width: window.innerWidth
    }

    this.setWidth = this.setWidth.bind(this);


    this.is_resize_listener_activated = false;
    if (this.is_resize_listener_activated === false) {
      window.addEventListener('resize', this.setWidth);

      this.is_resize_listener_activated = true;
    }
  }

  setWidth () {
    this.is_mounted && this.setState({
      width: window.innerWidth
    });
  }


  
  componentDidUpdate (prevProps, prevState) {
    
  }

  componentDidMount () {
    this.is_mounted = true;
  }



  render () {
    return (
      <div className="App">
        <div className="App-header">
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
          <div>
            <small><i>current width : {this.state.width}</i></small>
          </div>
        </div>
        <div className="pt-2 pb-5">
          <p style={{ margin: "0.5rem auto 0.5rem auto" }}>
            <Link className="text-decoration-none text-info" to="/user">User Router</Link>
            <span>{`　|　`}</span>
            <Link className="text-decoration-none text-info" to="/main">Main Router</Link>
            <span>{`　|　`}</span>
            <Link className="text-decoration-none text-info" to="/sequelize">Sequelize Router</Link>
          </p>
          <hr />
          <Switch>
            <Route exact path="/user"      component={User} />
            <Route exact path="/main"      component={Main} />
            <Route exact path="/sequelize" component={Sequelize} />
          </Switch>
        </div>
      </div>
    ); 
  }

  componentWillUnmount() {
    this.is_mounted = false;
  }
}

export default App;