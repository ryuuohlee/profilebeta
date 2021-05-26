import React from 'react';
import './Skills.css'

export const SkillsHome = (props) => {
  let { skills } = props;

  return(
    <div className="skills-table">
      {skills.map(skill =>
        <div className="skill-card" key={skill[1]}>
          <div className="skill-icon">
            <img className="skill-icon" src={skill[0]} alt="" />
          </div>
          <div className="skill-name">
            {skill[1]}
          </div>
        </div>
        )}
    </div>
  )
}

