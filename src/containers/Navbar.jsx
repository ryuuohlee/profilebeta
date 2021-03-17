import React, { Component } from 'react';
import Person from '../components/Home/Person.jsx';
import CV from '../components/CV/CV.jsx';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <aside className="site-nav-parent">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Person />
        </Link>
        <nav>
          <ul className="pages">
            <Link to="/offer" style={{ textDecoration: 'none' }}>
              <li className="list">Offer</li>
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
        </nav>
        <div className="site-nav-social">
          <div className="block-social">Get in Touch</div>
          <div className="contacts">
            <a href="mailto:me@jeffreylee.tech" target="_blank"><img src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/envelope.png" className="contact-icons"/></a>
            <a href="https://www.linkedin.com/in/jeffrey-lee-01" target="_blank"><img src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/linkedin-sign.png" className="contact-icons"/></a>
            <a href="https://github.com/ryuuohlee" target="_blank"><img src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/github-signw.png" className="contact-icons"/></a>
          </div>
        </div>
      </aside>
    );
  }
}

export default Navbar;