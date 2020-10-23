import React from 'react';

const Home = () => {
  return(
    <div>
      <div className="site-main">
        <div className="welcome">
          <h1 className="site-main-welcome">Hello! I'm Jeff,</h1>
              <h1 className="site-main-welcome-info"> a full-stack software engineer and I enjoy to <span className="welcome-highlight">make things</span> that <span className="welcome-difference">make a difference!</span>
          </h1>
        </div>
        <div className="about">
          <div className="page-title">
            <h2 className="about-header">About</h2>
          </div>
          <div className="about-mission">
            <h3 className="about-mission-statement">Thought-driven full-stack engineer with a passion for collaboration, problem solving, and thoughtful UI design.</h3>
          </div>
          <div className='about-history'>
            <p>Growing up I have always had a passion for technology and science. The opportunities and challenges that have come from them have always been fun and meaningful. Although my professional path hasn't always lined up with my passion I have been working hard at trying to steer my passion and profession together with technology. From being a Senior Assistant Manager of a movie theater to a Global Quality Manager for a large tech company, I have always used technology to engage in my passion for technology and science and to solve problems in the work place.</p>
            <p>As a full-stack engineer, I enjoy using my passion for technology understand the tools we use, my dominating attention to detail, and my mission-driven work ethic to help improve my world for a better tomorrow.</p>
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