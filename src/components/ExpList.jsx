import React from 'react';
import ExpCard from './ExpCard.jsx';

const ExpList = props => {
  props.jobs.shift();
  return(
  <div className="experience-past">
    <h3>Previous</h3>
    {props.jobs.map(job => <ExpCard job={job} key={job.id}/>)}
  </div>
  )
};

export default ExpList;