import React from 'react';

const PortfolioCard = () => {
  return (
    <div className="project-card">
      <div className="project-description">
        <img className="project-image" src="../src/images/sikfan.png"/>
        <h2 className="project-title">
          Sik Fan la!
        </h2>
        <p className="project-description">Restaurant searching application using Yelp API.</p>
      </div>
      <div className="overlay">
        <p><span className="project-technologies">Technologies:</span> ReactJS, HTML, CSS, YelpAPI</p>
        <a href="https://github.com/ryuuohlee/sikFan">
          <img src="../src/images/github-sign.png" className="project-github-icon" />
        </a>
      </div>
    </div>
  );
}

export default PortfolioCard;