import React, { Component } from 'react';
import CV from '../components/CV/CV.jsx';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state={
      open: false
    }
  }

  onTap() {
    setsState({ open: !this.open});
  }

  render() {
    return(
      <div className="site-nav-parent">
        <div className="site-nav-logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img className="site-nav-logo" src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/lee2.png" alt="" />
          </Link>
        </div>
        <div className="site-nav-selector">

          <nav>
            <ul className="site-page-list">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <li className="site-page">Home</li>
              </Link>
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <li className="site-page">About</li>
              </Link>
              <Link to="/portfolio" style={{ textDecoration: 'none' }}>
                <li className="site-page">Portfolio</li>
              </Link>
              <Link to="/experience" style={{ textDecoration: 'none' }}>
                <li className="site-page">Experience</li>
              </Link>
              <Link to="/education" style={{ textDecoration: 'none' }}>
                <li className="site-page">Education</li>
              </Link>
              <Link to="/cv" style={{ textDecoration: 'none' }}>
                <li className="site-page">CV</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;