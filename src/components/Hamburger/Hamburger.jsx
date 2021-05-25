import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const Hamburger = (props) => {
  return (
    <Menu {...props}>
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
    </Menu>
  )
}

export default Hamburger;