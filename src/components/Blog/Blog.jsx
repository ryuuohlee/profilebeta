import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';

const Blog = () => {
  let technologies = ["JavaScript(ES6+)", "React", "Vue", "Node.js", "Express", "PostgreSQL", 'Asana', 'Jira', 'Confluence'];

  return(
    <div className="blog-body">
      <div className="title">
        <h2 className="section-title">
          Tech Blog:
        </h2>
      </div>
      <div className="about-content">
        <div className="blog-image">
        </div>
        <div className="about-story">
          <p>
            Hello! My name is Jeffrey and I enjoy building things that make a difference. My interest in engineering started in the Montgomery Wards Autoshop, watching my dad work on cars. Then, my passion for computers came from my aunt who was the Technologies Director at HUD. I built my first PC at the age of 11 and then took Web Design in 2004 starting high-school career and the rest is history.
          </p>
          <p>
            Fast-forward to the present, I had the privilege of being about to attend the <span className="highlight">Hack Reactor</span> Full-Stack JavaScript boot camp in 2019 studying <span className="highlight">full-stack web development</span>, <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, <span className="highlight">Node.js</span> and I have built several personal applications since then. I have also completed the <span className="highlight">UC Berkeley Extension</span> Technology Project Management boot camp to gain a deeper understanding of SDLC Life Cycle methodologies and I have obtained my <span className="highlight">PSM</span> and <span className="highlight">PSPO</span>.
          </p>
        </div>
      </div>
      <div className="title">
        <h2 className="section-title">
          Personal Blog:
        </h2>
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
      <div className="personal-data-algo-skills">
        <div className="data-algo-cards">

        </div>
      </div>
    </div>
  )
}

export default Blog;