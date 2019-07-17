import React from 'react';
import { Link } from 'react-router-dom';

class User extends React.Component {
  render () {
    return (
      <div>
        <p>User Access</p>
        <p><Link to='/main'>to Main</Link></p>
      </div>
    );
  }
}

export default User;