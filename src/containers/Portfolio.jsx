import React from 'react';
import PortfolioCardList from '../components/PortfolioCardList.jsx'
import './Portfolio.css';
import projects from '../database/projects.js';

class Portfolio extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      projects: [
        {
          id: 1,
          title: 'RoboFriends',
          description: 'Basic app that has a dummy list of contacts and their Robot Avatars.',
          image: '../src/images/robofriend.png',
          technologies: ['ReactJS', 'HTML', 'CSS'],
          job: 'Software Engineer',
          githublink: 'https://github.com/ryuuohlee/robofriends'
        },
        {
          id: 2,
          title: 'Bring the Boom',
          description: 'Create custom Spotify playlist using Spotify API.',
          image: '../src/images/boombox.jpg',
          technologies: ['ReactJS', 'HTML', 'CSS', 'SpotifyAPI'],
          job: 'Software Engineer',
          githublink: 'https://github.com/ryuuohlee/bringTheBoom'
        },
        {
          id: 3,
          title: 'Sik Fan la!',
          description: 'Restaurant searching application using Yelp API',
          image: '../src/images/sikfan.png',
          technologies: ['ReactJS', 'HTML', 'CSS', 'YelpAPI'],
          job: 'Software Engineer',
          githublink: 'https://github.com/ryuuohlee/sikFan'
        },
        {
          id: 4,
          title: 'SofaMart',
          description: 'eCommerce web application item details component.',
          image: '../src/images/couch.jpg',
          technologies: ['ReactJS', 'HTML', 'CSS', 'Node.JS', 'ExpressJS', 'MySQL'],
          job: 'Software Engineer',
          githublink: 'https://github.com/ryuuohlee/ryuuohlee-furniture-app'
        },
        {
          id: 5,
          title: 'Now You Know',
          description: 'Designed back-end of movie review web application.',
          image: '../src/images/movieticket.jpg',
          technologies: ['ReactJS', 'HTML', 'CSS', 'Node.JS', 'ExpressJS', 'CassandraDB'],
          job: 'Software Engineer',
          githublink: 'https://github.com/ryuuohlee/ryuuohlee-movie-preview'
        }],
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