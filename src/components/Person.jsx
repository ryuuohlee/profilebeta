import React from 'react';

const Person = () => {
  return(
    <div className="site-nav-main">
      <div className="person">
        <a className="person-content" href="#">
          <img className="person-picture" src="../src/images/portfolioportrait.png" />
          <h1 class="person-title-name">Jeffrey Lee</h1>
            <h2 class="person-subtitle-job-title">Full-Stack Engineer</h2>
        </a>
      </div>
    </div>
  )
}

export default Person;