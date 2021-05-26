import React from 'react';
import './About.css';

const About = () => {
  return(
    <div className="about-body">
      <h2 className="section-title">
        About:
      </h2>
      <div className="about-story">
        <p>
          Hello! My name is Jeffrey and I enjoy building things make a difference. My interest in engineering started in the Montgomery Wards Autoshop, watching my dad work on cars. Then, my passion for computers came from my aunt who was the Technologies Director at HUD. I built my first PC at the age of 11 and then took Web Designn in 2004 starting high-school career and the rest is history.
        </p>
        <p>
          Fast-forward to the present, I had the privilege of being about to attend the Hack Reactor Full-Stack JavaScript bootcamp in 2019 and I have built several personal applications since then. I have also completed the UC Berkeley Technology Project Management bootcamp to gain a deeper understanding of SDLC Life Cycle methodologies and I have obtained my PSM and PSPO.
        </p>
      </div>
      <div className="about-self-portrait">
          <img className="person-picture" src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/portfolioportrait.png" />
          <h1 className="person-title-name">Jeffrey Lee</h1>
      </div>
      <p>
        Here are a few technologies I have been workigng with recently:
      </p>
      <ul>
        <li>
          JavaScript (ES6+)
        </li>
        <li>
          React
        </li>
        <li>
          Vue
        </li>
        <li>
          Node.js
        </li>
        <li>
          Express
        </li>
        <li>
          PostgreSQL
        </li>
      </ul>
    </div>
  )
}

export default About;