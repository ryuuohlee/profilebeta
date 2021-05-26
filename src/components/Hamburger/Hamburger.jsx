import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const Hamburger = (props) => {
  return (
    <Menu width={ '80%' }>
      <nav>
        <ul className="site-page-list-mobile">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li className="site-page-mobile">Home</li>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <li className="site-page-mobile">About</li>
          </Link>
          <Link to="/portfolio" style={{ textDecoration: 'none' }}>
            <li className="site-page-mobile">Portfolio</li>
          </Link>
          <Link to="/experience" style={{ textDecoration: 'none' }}>
            <li className="site-page-mobile">Experience</li>
          </Link>
          <Link to="/education" style={{ textDecoration: 'none' }}>
            <li className="site-page-mobile">Education</li>
          </Link>
          <Link to="/cv" style={{ textDecoration: 'none' }}>
            <li className="site-page-mobile">CV</li>
          </Link>
        </ul>
      </nav>
    </Menu>
  )
}

export default Hamburger;