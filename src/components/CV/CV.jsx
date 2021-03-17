import React from 'react';
import Iframe from 'react-iframe';
import './CV.css';

const CV = () => {
  return(
    <div className="site-main">
        <h2 className="page-title">
          CV
        </h2>
        <Iframe src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/Jeffrey+Lee+Software+Engineer+Resume.pdf"
        width="95%"
        className="cv-container" />
    </div>
  )
}

export default CV;