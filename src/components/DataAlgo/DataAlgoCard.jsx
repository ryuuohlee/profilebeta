import React, { useState, useEffect } from 'react';

const DataAlgoCard = (props) => {
  const logos = ['https://jeffreyleeportfolio.s3.us-west-1.amazonaws.com/skills/Codeforces_logo.png', 'https://blog.codewars.com/logo.png?h=cbc5fc2fb90154f31e3eb4ed3d3d572d497fa0522469e8f186562c4365b43db2']
  const {codeforces, codewars} = props;

  console.log(codewars)

  if(!!codeforces) {
    return (
      <div className="contest-card">
        <a href="https://codeforces.com/profile/Ryuuoh" target="_blank">
          <img src={logos[0]} className="contest-logo" alt="" />
        </a>
        <div>
          <span className="contest-category">Rank:</span> {codeforces.rank}
        </div>
        <div>
          <span className="contest-category">Rating:</span> {codeforces.rating}
        </div>
        <div>
          <span className="contest-category">Language:</span> C++
        </div>
      </div>
    )
  }

  if(codewars.length !== 0) {
    return (
      <div className="contest-card">
        <a href="https://www.codewars.com/users/ryuuohlee" target="_blank">
          <img src={logos[1]} className="contest-logo" alt="" />
        </a>
        <div>
          <span className="contest-category">Rank:</span> {codewars.ranks.languages.javascript.name}
        </div>
        <div>
          <span className="contest-category">Rating:</span> {codewars.honor}
        </div>
        <div>
          <span className="contest-category">Language:</span> JavaScript
        </div>
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }
};

export default DataAlgoCard;