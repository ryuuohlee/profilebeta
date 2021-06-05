import React, { useState }from 'react';
import Recommendations from '../Recommendations/Recommendations.jsx';
import SkillsHome from '../Skills/Skills.jsx';
import './Home.css';
import { recommendations } from '../../database/recommendations.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      recommendations: recommendations,
      skills: [["https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/skills/html5-logo.png", "HTML5"], ["https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/skills/css3-logo.png", "CSS3"], ["https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/skills/js-logo.png", "JavaScript(ES6+)"], ["https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/skills/node-js.png", "Node.js"], ["https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/skills/react.png", "React"], ["https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/skills/postgres.png", "PostgreSQL"], ['https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/skills/asana-logo.png', 'Asana'], ['https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/skills/atlassian_jira_logo_icon_170511.png', 'Jira'], ['https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/skills/confluence-seeklogo.com.svg', 'Confluence']],
    }
  }

  render() {
    let {recommendations, skills} = this.state;

    return(
        <div className="site-main">
            <div className="welcome">
            </div>
              <div className="welcome-content">
                  <div className="site-main-welcome-salutation">
                    <h1 className="site-main-welcome">Hello! I'm Jeff,</h1>
                  </div>
                <div className="welcome-info">
                  <p className="site-main-welcome-start"> a </p>
                  <div className="site-main-welcome-info-roles">
                      <ul className="role-list">
                        <li className="role">software engineer</li>
                        <li className="role">mechanical engineer</li>
                        <li className="role">project manager</li>
                        <li className="role">software engineer</li>
                      </ul>
                  </div>
                </div>
                <div>
                  <p className="site-main-welcome-end"> who enjoys
                    <span className="welcome-highlight">building things</span> that <span className="welcome-difference"> make a difference!</span>
                  </p>

                </div>
              <div className="about-mission">
                <h3 className="about-mission-statement">Thought-driven software/mechanical engineer with a passion for collaboration, problem solving, and thoughtful UI design.</h3>
              </div>
            </div>
            <div className="personal-recommendations">
              <div className="quote">
                <FontAwesomeIcon icon={faQuoteLeft} size="4x" />
              </div>
              <Recommendations recommendations={recommendations} />
              <div className="quote">
                <FontAwesomeIcon icon={faQuoteRight} size="4x" />
              </div>
            </div>
            <div className="personal-skills">
              <div className="personal-skills-heading">
                <h2 className="section-title">
                  Skills:
                </h2>
              </div>
              <div className="skills-section">
                <SkillsHome skills={skills} />
              </div>
            </div>
        </div>
    )
  }
}

export default Home;