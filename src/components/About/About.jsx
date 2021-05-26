import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './About.css';

const About = () => {
  let technologies = ["JavaScript(ES6+)", "React", "Vue", "Node.js", "Express", "PostgreSQL"];

  return(
    <div className="about-body">
      <div className="title">
        <h2 className="section-title">
          About:
        </h2>
      </div>
      <div className="about-content">
        <div className="about-self-portrait">
          <div className="person-picture-overlay">
          </div>
            <img className="person-picture" src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/portfolioportrait.png" />
            <div className="about-person-roles">
                <ul className="about-role-list">
                  <li className="about-role">Software Engineer</li>
                  <li className="about-role">Mechanical Engineer</li>
                  <li className="about-role">Project Manager</li>
                  <li className="about-role">Software Engineer</li>
                </ul>
            </div>
        </div>
        <div className="about-story">
          <p>
            Hello! My name is Jeffrey and I enjoy building things make a difference. My interest in engineering started in the Montgomery Wards Autoshop, watching my dad work on cars. Then, my passion for computers came from my aunt who was the Technologies Director at HUD. I built my first PC at the age of 11 and then took Web Designn in 2004 starting high-school career and the rest is history.
          </p>
          <p>
            Fast-forward to the present, I had the privilege of being about to attend the <span className="highlight">Hack Reactor</span> Full-Stack JavaScript bootcamp in 2019 studying <span className="highlight">full-stack web development</span>, <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, <span className="highlight">Node.js</span> and I have built several personal applications since then. I have also completed the <span className="highlight">UC Berkeley Extension</span> Technology Project Management bootcamp to gain a deeper understanding of SDLC Life Cycle methodologies and I have obtained my <span className="highlight">PSM</span> and <span className="highlight">PSPO</span>.
          </p>
        </div>
      </div>
      <div className="personal-technologies">
        <div>
          <p>
            Here are a few technologies I have been workigng with recently:
          </p>
        </div>
        <div className="technologies-list">
          {technologies.map(tech =>
            <div className="technology" key={tech}>
              <div className="technology-arrow-icon">
                <FontAwesomeIcon icon={faAngleRight} size="1x" />
              </div>
              <span>{tech}</span>
            </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default About;