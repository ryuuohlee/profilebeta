import React from 'react';
import ExpCard from '../components/ExpCard.jsx';
import './Experience.css';

class Experience extends React.Component {
  render() {
    return(
      <div className="site-main">
        <div className="experience-overview">
          <div className="page-title">
            <h2>My Experience</h2>
          </div>
        </div>
        <ExpCard />
      </div>
    )
  }
}

export default Experience;