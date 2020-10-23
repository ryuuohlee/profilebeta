import React from 'react';

const ExpCard = () => {
  return(
    <div>
      <div className="experience-container">
        <div class="experience-title-company">
          <h5>Global Quality Manager</h5>
          <img src="../src/images/accenture.png" className="experience-container-company" />
        </div>
        <div class="experience-details">
          <div class="experience-details-description">Manage quality assurance teams for client projects across the globe managing 90 agents and six team leads. </div>
          <br></br>
          <div class="experience-details-achievements">
              <ul>
                <li>Created and currently maintain quality programs for 13+ workflows to protect additional client assets.</li>
                <li>Implemented workflow corrections to reduce the error rate by 50% bringing it to under 2% error rate.</li>
                <li>Developed and launced new review tool for QA agents via Chrome extension improving review handle time and data security.</li>
                <li>Designed a calibration process to ensure uniform decision making keeping the team over 90% accuracy and precision rate to reduce error.</li>
              </ul>
          </div>
        </div>
      </div>
        <div class="experience-container experience-details-time">
              May 2019 - Present | USA
        </div>
    </div>
  )
}

export default ExpCard;