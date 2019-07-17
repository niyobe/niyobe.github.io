import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  render () {
    return (
      <div>
        <p>Main Access</p>
        <p><Link to='/user'>to User</Link></p>
      </div>
    );
  }
}

export default Main;