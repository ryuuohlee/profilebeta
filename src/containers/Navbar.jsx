import React, { Component, useState } from 'react';
import CV from '../components/CV/CV.jsx';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Iframe from 'react-iframe';
import './Navbar.css';
import '../components/CV/CV.css';

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(){
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
            <Link to="/blog" style={{ textDecoration: 'none' }}>
              <li className="site-page">Blog</li>
            </Link>
              <li className="resume"
              onClick={openModal}
              >
                Resumé
              </li>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
              content: {
                fontFamily:"Roboto, Helvetica, sans-serif",
                backgroundColor: '#0d1117'
              }
            }}
            >
              <div className="cv-body">
                  <h2 className="section-title">
                    Curriculum Vitae:
                  </h2>
                  <button className="close-modal" onClick={closeModal}>X</button>
                  <Iframe src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/Jeffrey+Lee+Software+Engineer+Resume.pdf"
                  width="95%"
                  className="cv-container" />
              </div>
            </Modal>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;