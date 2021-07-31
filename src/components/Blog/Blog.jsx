import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';

const Blog = () => {
  let technologies = ["JavaScript(ES6+)", "React", "Vue", "Node.js", "Express", "PostgreSQL", 'Asana', 'Jira', 'Confluence'];

  return(
    <div className="blog-body">
      <div className="title">
        <h2 className="section-title" target="_blank" >
            JeffreyRig
        </h2>
      </div>
      <div className="about-content">
        <div className="blog-image">
        <a href="https://jeffreyrig.com"></a>
        </div>
        <div className="about-story">
          <p>
            jeffreyrig.com is my blog where you can follow my journey as an engineer. I will go in-depth into the projects. These projects will be discussing engineering topics and technologies that I find facinating.
          </p>
        </div>
      </div>
      <div className="title">
        <h2 className="section-title">
          Personal Blog:
        </h2>
      </div>
      <div className="about-content">
        <div className="blog-image">
        </div>
        <div className="about-story">
          <p>
            Hello! My name is Jeffrey and I enjoy building things that make a difference. My interest in engineering started in the Montgomery Wards Autoshop, watching my dad work on cars. Then, my passion for computers came from my aunt who was the Technologies Director at HUD. I built my first PC at the age of 11 and then took Web Design in 2004 starting high-school career and the rest is history.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog;