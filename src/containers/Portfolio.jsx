import React from 'react';
import PortfolioCard from '../components/PortfolioCard.jsx'
import './Portfolio.css'

class Portfolio extends React.Component{
  render() {
    return(
      <div className="site-main">
        <h2 className="page-title">
          My Portfolio
        </h2>
        <div className="project-list">
          <PortfolioCard />
        </div>
      </div>
    )
  }
}

export default Portfolio;