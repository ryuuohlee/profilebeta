import React, { useState, useEffect } from 'react';

const DataAlgoCard = (props) => {
  const logos = ['https://jeffreyleeportfolio.s3.us-west-1.amazonaws.com/skills/Codeforces_logo.png', 'https://blog.codewars.com/logo.png?h=cbc5fc2fb90154f31e3eb4ed3d3d572d497fa0522469e8f186562c4365b43db2']
  const {codeforces, codewars} = props;

  console.log(codewars)

  if(!!codeforces) {
    return (
      <div className="contest-card">
        <img src={logos[0]} className="contest-logo" alt="" />
        <div>
          <span>Rank:</span> {codeforces.rank}
        </div>
        <p>Rating: </p> {codeforces.rating}
      </div>
    )
  }

  if(codewars.length !== 0) {
    return (
      <div className="contest-card">
        <img src={logos[1]} className="contest-logo" alt="" />
        <div>
          <span>Rank:</span> {codewars.ranks.languages.javascript.name}
        </div>
        <p>Rating: </p> {codewars.honor}
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