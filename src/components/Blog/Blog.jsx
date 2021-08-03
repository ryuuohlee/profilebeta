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
            JeffreyRig!
        </h2>
      </div>
      <div className="about-content">
        <div className="blog-image">
        <a href="https://jeffreyrig.com"></a>
        </div>
        <div className="about-story">
          <p>
            jeffreyrig.com is my blog where you can follow my journey as an engineer. I will go in-depth into the projects and other technology related topics. These projects will be discussing engineering topics and technologies that I find facinating.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog;