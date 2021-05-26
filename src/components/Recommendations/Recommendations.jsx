import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import RecomCard from './RecomCard.jsx';
import './Recommendations.css';

const Recommendations = props => {
  let { recommendations } = props;

  return(
    <Carousel
      autoPlay={true}
      interval={6000}
      dynamicHeight={true}
      infiniteLoop={true}
      showThumbs={false}
      >
      {recommendations.map(recommendation => <RecomCard recommendation={recommendation} key={recommendation.id} />)}
    </Carousel>
  );
}

export default Recommendations;