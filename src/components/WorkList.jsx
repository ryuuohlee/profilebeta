import React from 'react';
import Work from './Work.jsx';

const WorkList = props => {
  return(
    <div className="work-place-companies">
      {props.places.map(job => <Work job={job} key={job}/>)}
    </div>
  )
}

export default WorkList;