import React from 'react';
import Certificates from './Certificates.jsx';

const CertCard = props => {
  return(
      <div className="experience-container">
        <div className="experience-title-company">
          <img src={props.cert.schoolImg} className="experience-container-company" />
        </div>
        <div className="experience-details">
          <div className="experience-details-achievements">
              <ul>
                {props.cert.achievements.map(achievement => <Certificates achievement={achievement} key={achievement}/>)}

              </ul>
          </div>
        </div>
      </div>
  )
}

export default CertCard;