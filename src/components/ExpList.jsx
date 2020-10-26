import React from 'react';
import ExpCard from './ExpCard.jsx';

const ExpList = props => {
  console.log(props.jobs[0]);
  let jobs = props.jobs.slice();
  if(jobs[0].duration.includes("Present")) {
    jobs.shift();
  }
  return(
  <div className="experience-past">
    <h3>Previous</h3>
    {jobs.map(job => <ExpCard job={job} key={job.id}/>)}
  </div>
  )
};

export default ExpList;