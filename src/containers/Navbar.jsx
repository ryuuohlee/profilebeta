import React, { Component } from 'react';
import Person from '../components/Person.jsx';
import './App.css';

class Navbar extends Component {
  render() {
    return(
      <aside className="site-nav-parent">
        <Person />
        pages
        cv
        social
      </aside>
    );
  }
}

export default Navbar;