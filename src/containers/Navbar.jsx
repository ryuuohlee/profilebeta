import React, { Component } from 'react';
import Person from '../components/Person.jsx';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <aside className="site-nav-parent">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Person />
        </Link>
        <ul className="pages">
          <Link to="/offer" style={{ textDecoration: 'none' }}>
            <li className="list">My Offer</li>
          </Link>
          <Link to="/portfolio" style={{ textDecoration: 'none' }}>
            <li className="list">Portfolio</li>
          </Link>
          <Link to="/experience" style={{ textDecoration: 'none' }}>
            <li className="list">Experience</li>
          </Link>
          <Link to="/education" style={{ textDecoration: 'none' }}>
            <li className="list">Education</li>
          </Link>
          <Link to="/cv" style={{ textDecoration: 'none' }}>
            <li className="list">CV</li>
          </Link>
        </ul>
        <div className="site-nav-social">
          <div className="block-social">Get in Touch</div>
          <div className="contacts">
            <a href="mailto:me@jeffreylee.tech" ><img src="../src/images/envelope.png" className="contact-icons"/></a>
            <a href="https://www.linkedin.com/in/jeffrey-lee-01" ><img src="../src/images/linkedin-sign.png" className="contact-icons"/></a>
            <a href="https://github.com/ryuuohlee" ><img src="../src/images/github-signw.png" className="contact-icons"/></a>
          </div>
        </div>
      </aside>
    );
  }
}

export default Navbar;