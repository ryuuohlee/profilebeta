import React from 'react';
import PortfolioCard from './PortfolioCard.jsx';

const PortfolioCardList = props => {
  return(
    <div className='project-list'>

      {props.projects.map(project => <PortfolioCard project={project} key={project.id}/>)}
    </div>
  )
}

export default PortfolioCardList;