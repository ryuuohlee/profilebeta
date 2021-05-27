import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import './Contact.css';


const Contact = () => {
  return(
    <div className="contact-body">
      <div className="site-nav-social">
        <div className="contact-icons-list">
          <a className="contact-icons" href="mailto:me@jeffreylee.tech" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} size="2x"/>
          </a>
          <a className="contact-icons" href="https://www.linkedin.com/in/jeffrey-lee-01" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          </a>
          <a className="contact-icons" href="https://github.com/ryuuohlee" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;