import React from 'react';
import CertCard from './CertCard.jsx';

const CertList = props => {
  return(
  <div>
    <h3>Certifications</h3>
    {props.certificates.map(cert => <CertCard cert={cert} key={cert.id}/>)}
  </div>
  )
};

export default CertList;