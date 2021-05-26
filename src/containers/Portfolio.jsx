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
      <div className="portfolio-body">
        <h2 className="section-title">
          Portfolio:
        </h2>
        <div>
          <PortfolioCardList projects={this.state.projects} />
        </div>
      </div>
    )
  }
}

export default Portfolio;