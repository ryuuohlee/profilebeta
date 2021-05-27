import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const Hamburger = (props) => {
  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <Menu
    width={ '80%' }>
      <nav>
        <ul className="site-page-list-mobile">
          <Link to="/" style={{ textDecoration: 'none' }} >
            <li className="site-page-mobile">Home</li>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }} >
            <li className="site-page-mobile">About</li>
          </Link>
          <Link to="/portfolio" style={{ textDecoration: 'none' }} >
            <li className="site-page-mobile">Portfolio</li>
          </Link>
          <Link to="/experience" style={{ textDecoration: 'none' }} >
            <li className="site-page-mobile">Experience</li>
          </Link>
          <Link to="/education" style={{ textDecoration: 'none' }} >
            <li className="site-page-mobile">Education</li>
          </Link>
          <Link to="/cv" style={{ textDecoration: 'none' }} >
            <li className="site-page-mobile">Resumé</li>
          </Link>
        </ul>
        <div className="site-nav-social-mobile">
          <div className="block-social-mobile">Get in Touch</div>
          <div className="contacts">
            <a href="mailto:me@jeffreylee.tech" target="_blank"><img src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/envelope.png" className="contact-icons-mobile"/></a>
            <a href="https://www.linkedin.com/in/jeffrey-lee-01" target="_blank"><img src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/linkedin-sign.png" className="contact-icons-mobile"/></a>
            <a href="https://github.com/ryuuohlee" target="_blank"><img src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/github-signw.png" className="contact-icons-mobile"/></a>
          </div>
        </div>
      </nav>
    </Menu>
  )
}

export default Hamburger;