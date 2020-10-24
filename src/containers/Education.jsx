import React from 'react';
// import EduCard from '../components/EduCard.jsx';
import CertList from '../components/CertList.jsx';
import Achievements from '../components/Achievements.jsx';
import Certificates from '../components/Certificates.jsx';
import './Experience.css';
import { schools,certifications } from '../database/education.js'

class Education extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      schools: schools,
      certifications: certifications
    }
  }
  render() {
    return(
      <div className="site-main">
        <h2 className="page-title">
          Education
        </h2>
        <div className="experience-current">
          <h3>Institution</h3>
          <div className="experience-container">
            <div className="experience-title-company">
              <h3>{this.state.schools[0].study}</h3>
              <img src={this.state.schools[0].schoolImg} className="experience-container-company" />
            </div>
            <div className="experience-details">
              <div className="experience-details-description">{this.state.schools[0].description}</div>
              <div className="experience-details-achievements">
                  <ul>
                    {this.state.schools[0].achievements.map(achievement => <Achievements achievement={achievement} key={achievement}/>)}
                  </ul>
              </div>
            </div>
            <div className="experience-details-time">
                  {this.state.schools[0].duration} | {this.state.schools[0].location}
            </div>
          </div>
        </div>
        <CertList certificates={this.state.certifications}/>
      </div>
    )
  }
}

export default Education;