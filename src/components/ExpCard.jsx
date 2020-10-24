import React from 'react';
import Achievements from './Achievements.jsx';

const ExpCard = props => {
  return(
      <div className="experience-container">
        <div className="experience-title-company">
          <h4>{props.job.title}</h4>
          <img src={props.job.companyImg} className="experience-container-company" />
        </div>
        <div className="experience-details">
          <div className="experience-details-description">{props.job.description}</div>
          <br></br>
          <div className="experience-details-achievements">
              <ul>
                {props.job.achievements.map(achievement => <Achievements achievement={achievement} key={achievement}/>)}
              </ul>
          </div>
        </div>
        <div className="experience-details-time">
              {props.job.duration} | {props.job.location}
        </div>
      </div>
  )
}

export default ExpCard;