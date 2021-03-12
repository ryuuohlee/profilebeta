import React from 'react';
import Achievements from './Achievements/Achievements.jsx';

const EduCard = props => {
  return(
      <div className="experience-container">
        <div className="experience-title-company">
          <h4>{props.school.study}</h4>
          <img src={props.school.schoolImg} className="experience-container-company" />
        </div>
        <div className="experience-details">
          <div className="experience-details-description">{props.school.description}</div>
          <div className="experience-details-achievements">
              <ul>
                {props.school.achievements.map(achievement => <Achievements achievement={achievement} key={achievement}/>)}
              </ul>
          </div>
        </div>
        <div className="experience-details-time">
              {props.school.duration} | {props.school.location}
        </div>
      </div>
  )
}

export default EduCard;