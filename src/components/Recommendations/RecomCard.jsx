import React from 'react';

const RecomCard = props => {
  let { recommendation, recommender, date } = props.recommendation;

  return(
   <div>
     <div className="recom-note">
       {recommendation}
     </div>
     <div className="recom-stats">
       <div className="recom-recommender">
         {recommender}
       </div>
       <div className="recom-date">
         {date}
       </div>
     </div>
   </div>
  );
}

export default RecomCard;