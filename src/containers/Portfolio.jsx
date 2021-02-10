import React from 'react';
import PortfolioCardList from '../components/Portfolio/PortfolioCardList.jsx'
import './Portfolio.css';
import { projects } from '../database/projects.js';

class Portfolio extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      projects: projects,
    }
  }

  render() {
    return(
      <div className="site-main">
        <h2 className="page-title">
          My Portfolio
        </h2>
        <div>
          <PortfolioCardList projects={this.state.projects} />
        </div>
      </div>
    )
  }
}

export default Portfolio;