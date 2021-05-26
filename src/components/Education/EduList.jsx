import React from 'react';
import EduCard from './EduCard.jsx';

const EduList = props => {
  let {schools} = props;
  return(
  <div>
    {schools.map(school => <EduCard school={school} key={school.id}/>)}
  </div>
  )
};

export default EduList;