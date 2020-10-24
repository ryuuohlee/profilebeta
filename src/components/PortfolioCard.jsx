import React from 'react';

const PortfolioCard = props => {
  return (
    <div className="project-card">
      <div className="project-description">
        <img className="project-image" src={props.project.image}/>
        <h2 className="project-title">
          {props.project.title}
        </h2>
        <p className="project-description">{props.project.description}</p>
      </div>
      <div className="overlay">
        <p><span className="project-technologies">Technologies: </span>{props.project.technologies.join(", ")}</p>
        <a href={props.project.githublink}>
          <img src="../src/images/github-sign.png" className="project-github-icon" />
        </a>
      </div>
    </div>
  );
}

export default PortfolioCard;