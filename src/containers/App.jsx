import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import css from './App.css';

class App extends Component {
  render() {
    return(
      <div className='home-parent'>
        <Navbar />
      </div>
    )
  }
}

export default App;