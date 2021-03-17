import React from 'react';
import './Offer.css';

const Offer = () => {
  return (
    <div className="site-main">
      <h2 className="page-title">
        My Offer
      </h2>
      <div className="offer-overview">
        <p className="offer-opening">An intelligent, hardworking full-stack software engineer ready to work.</p>
        <p>I have helped maintain, plan, test, develop, and launch multiple projects from scratch, working on both the <span className="offer-job-emphasis">back-end</span> and <span className="offer-job-emphasis">front-end</span> codebases.</p>
        <p>I can help you with the entirety of your project:</p>
        <div className="offer-list">
          <ul>
            <li>Data structure of back-end</li>
            <li>Authenticating good UI/UX design</li>
            <li>Back-End and Front-End development.</li>
            <li>Estimating tasks</li>
            <li>Developing, leading, launching, and monitoring the project.</li>
            <li>Plan and manage the project from conception to completion using methodologies such as Agile, Scrum, Waterfall, and more.</li>
          </ul>
        </div>
        <div className="offer-frontend">
          <h3 className="offer-title"><img src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/font-selection-editor.png" className="offer-title-icon"/>Front-End Engineering</h3>
          <p><span className="offer-opening">I specialize in web applications written in <span className="offer-skill">React</span></span>. Recently started working with <span className="offer-skill">Vue</span> and <span className="offer-skill">TypeScript</span> to broaden my skill set. </p>
          <p>My current skill set for front-end development includes:</p>
          <div className="offer-list">
            <ul>
              <li>Creating responsive React apps for the modern day variety of different platforms. </li>
              <li>Experience with JavaScript ecosystems such as React, Redux, jQuery, Lodash/Underscore, Redux, Angular, and TypeScript.</li>
              <li>Integrating front-end tools such as Webpack.</li>
              <li>Excellent sense of design and UI/UX.</li>
            </ul>
          </div>
        </div>
        <div className="offer-backend">
          <h3 className="offer-title"><img src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/sitemap.png" className="offer-title-icon"/>Back-End Engineering</h3>
          <p className="offer-opening">For back-end development, my current stack includes <span className="offer-skill">ExpressJS</span>, <span className="offer-skill">MySQL</span>, and <span className="offer-skill">NodeJS</span>.</p>
          <p>Almost all the applications that I have launched have back-ends also worked on by me. Depending on the application purpose I have used many different technologies and frameworks to improve development speed, and application performance and reliability.
          </p>
          <p>From the back-end I can provide:</p>
          <div className="offer-list">
            <ul>
              <li>Develop back-ends using NodeJS and ExpressJS.</li>
              <li>Split the back-end into separate microservices.</li>
              <li>Use different types of databases (MySQL, PostgreSQL, MongoDB, CassandraDB).</li>
              <li>Incorporate API's, cloud servers, and asynchronous workers.</li>
              <li>Write unit and end-to-end tests.</li>
            </ul>
          </div>
        </div>
        <div className="offer-frontend">
          <h3 className="offer-title"><img src="https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/trello-website-logo.png" className="offer-title-icon"/>Technical Project Management</h3>
          <p><span className="offer-opening">When it comes to Technical Project Management I specialize in <span className="offer-skill">Agile Scrum</span> framework.</span> I am also a certified <span className="offer-skill">Professional Scrum Master</span>.</p>
          <p>For project management I can provide:</p>
          <div className="offer-list">
            <ul>
              <li>The integration of the Scrum framework into your organization.</li>
              <li>Run the project using tools such as Jira/Confluence, Asana, Wrike, and more.</li>
              <li>Successfully see the project from conception to completion.</li>
            </ul>
          </div>
        </div>
        <div className="offer-contact">
          <p>If you feel that I am a good fit for your team, please feel free to contact me and I'll respond as promptly as possible.</p>
        </div>
      </div>
    </div>
  )
}

export default Offer;