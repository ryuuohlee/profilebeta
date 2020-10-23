import React, { Component } from 'react';
import Person from '../components/Person.jsx';
import './App.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <aside className="site-nav-parent">
        <Link to="/">
          <Person />
        </Link>
        <ul className="pages">
          <Link to="/offer">
            <li className="list">My Offer</li>
          </Link>
          <Link to="/portfolio">
            <li className="list">Portfolio</li>
          </Link>
          <Link to="/experience">
            <li className="list">Experience</li>
          </Link>
          <Link to="/education">
            <li className="list">Education</li>
          </Link>
          <Link to="/cv">
            <li className="list">My CV</li>
          </Link>
        </ul>
        <div class="site-nav-social">
          <div class="block-social">Get in Touch</div>
          <div class="contacts">
            <a href="mailto:me@jeffreylee.tech" ><img src="../src/images/envelope.png" class="contact-icons"/></a>
            <a href="https://www.linkedin.com/in/jeffrey-lee-01" ><img src="../src/images/linkedin-sign.png" class="contact-icons"/></a>
            <a href="https://github.com/ryuuohlee" ><img src="../src/images/github-sign.png" class="contact-icons"/></a>
          </div>
        </div>
      </aside>
    );
  }
}

export default Navbar;