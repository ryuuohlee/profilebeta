import React from 'react';

const PortfolioCard = props => {
  if(props.project.deployed === "N/A") {
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
          <p><span className="project-technologies">Not Deployed </span></p>
          <div className="project-links">
            <a href={props.project.githublink} target="_blank">
              <img src="../src/images/github-sign.png" className="project-icon" title="Check my code" />
            </a>
          </div>
        </div>
      </div>
    );
  }
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
        <p><span className="project-technologies">Deployed on: </span>{props.project.deployed}</p>
        <div className="project-links">
          <a href={props.project.githublink}>
            <img src="../src/images/github-sign.png" className="project-icon" title="Check my code" />
          </a>
          <a href={props.project.weblink} target="_blank">
            <img src="../src/images/external-link-symbol.png" className="project-icon" title="Check me out" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;