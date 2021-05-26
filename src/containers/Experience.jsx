import React from 'react';
import ExpCard from '../components/Experience/ExpCard.jsx';
import WorkList from '../components/Experience/WorkList.jsx';
import ExpList from '../components/Experience/ExpList.jsx';
import Achievements from '../components/Education/Achievements/Achievements.jsx';
import './Experience.css';
import { jobs } from '../database/jobs.js';

class Experience extends React.Component {
  constructor(props){
    super(props)

    this.state={
      jobs: jobs,
      places: ['https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/accenture.png','https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/visionit.png', 'https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/cinemark.jpg', 'https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/360investments.png' ]
    }
  }
  render() {
    let {jobs, places} = this.state;
    return(
      <div className="experience-body">
          <h2 className="section-title">
            Experience
          </h2>
          {/**Current Position */}
        <div className="experience-current">
          <h3>Current</h3>
          <div className="experience-container">
            <div className="experience-title-company">
              <h4>{jobs[0].title}</h4>
              <img src={jobs[0].companyImg} className="experience-container-company" />
            </div>
            <div className="experience-details">
              <div className="experience-details-description">{this.state.jobs[0].description}</div>
              <div className="experience-details-achievements">
                  <ul>
                    {this.state.jobs[0].achievements.map(achievement => <Achievements achievement={achievement} key={achievement}/>)}
                  </ul>
              </div>
            </div>
            <div className="experience-details-time">
                  {this.state.jobs[0].duration} | {this.state.jobs[0].location}
            </div>
          </div>
        </div>
        {/**Image logos of places I have worked at */}
        <div className="work-place-container">
          <h3 className="work-place-header">Work Places</h3>
          <WorkList places={this.state.places}/>
        </div>
        {/**Previous Positions */}
        <ExpList jobs={this.state.jobs} />
      </div>
    )
  }
}

export default Experience;