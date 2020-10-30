import React from 'react';
import ExpCard from './ExpCard.jsx';

const ExpList = props => {
  let jobs = props.jobs.slice();
  jobs.shift();
  return(
  <div className="experience-past">
    <h3>Previous</h3>
    {jobs.map(job => <ExpCard job={job} key={job.id}/>)}
  </div>
  )
};

export default ExpList;