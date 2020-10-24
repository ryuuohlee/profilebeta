import React from 'react';
import './Cert.css';

const Certificates = props => {
  let achievement=props.achievement.split(", ");

  return(
    <li>{achievement[0]} | <a href={achievement[1]} target="_blank" className="credential"> Credential</a></li>
  )
}

export default Certificates;