import React, { useState, useEffect } from 'react';

const DataAlgoCard = (props) => {
  const logos = ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Codeforces_logo.svg/2560px-Codeforces_logo.svg.png', 'https://www.codewars.com/assets/logos/logo-square-red-big-dark-text-2e091298050b4a55869eb3c7d02e5cd21561b042f7692401fd9e3a2409078c39.png']
  const {codeforces, codewars} = props;

  console.log(codewars)

  if(!!codeforces) {
    return (
      <div className="contest-card">
        <img src={logos[0]} className="contest-logo" alt="" />
        <p>Rank:</p> {codeforces.rank}
        <p>Rating: </p> {codeforces.rating}
      </div>
    )
  }

  if(codewars.length !== 0) {
    return (
      <div className="contest-card">
        <img src={logos[1]}  alt="" />
        <p>Rank:</p> {codewars.ranks.languages.javascript.name}
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