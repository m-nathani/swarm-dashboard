import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="app-header">
          <h1 className="app-title">Docker Swarm Dashboard!</h1>
        </header>
      </div>
    );
  }
}

export default Header;
