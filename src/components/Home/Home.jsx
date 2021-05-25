import React from 'react';
import './Home.css';

const Home = () => {
  return(
    <main>
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
              <h3 className="about-mission-statement">Thought-driven full-stack engineer with a passion for collaboration, problem solving, and thoughtful UI design.</h3>
            </div>
          </div>
      </div>
    </main>

  )
}

export default Home;