import React from 'react';
import './Home.css';

const Home = () => {
  return(
    <div>
      <div className="site-main">
        <div className="welcome">
          <h1 className="site-main-welcome">Hello! I'm Jeff,</h1>
          <p className="site-main-welcome-info"> a full-stack software engineer who enjoys <span className="welcome-highlight">building things</span> that <span className="welcome-difference">make a difference!</span>
          </p>
        </div>
        <h2 className="page-title">
          About
        </h2>
        <div className="about">
          <div className="about-mission">
            <h3 className="about-mission-statement">Thought-driven full-stack engineer with a passion for collaboration, problem solving, and thoughtful UI design.</h3>
          </div>
          <div className='about-history'>
            <p>Growing up I have always had a passion for technology and science. The opportunities and challenges that have come from them have always been fun and meaningful. Although my professional path hasn't always lined up with my passion I have been working hard at trying to steer my passion and profession together with technology. From being a Senior Assistant Manager of a movie theater to a Global Quality Manager for a large tech company, I have always used technology to engage in my passion for technology and science and to solve problems in the workplace.</p>
            <p>As a full-stack engineer, I enjoy using my passion for technology to understand the tools we use, and my dominating attention to detail with my mission-driven work ethic to help improve my world for a better tomorrow.</p>
          </div>
          <div className="about-focus">
            <p><span className="about-focus-property">Current Focus:</span> React // Systems Design // UI Design</p>
          </div>
        </div>
    </div>
    </div>

  )
}

export default Home;