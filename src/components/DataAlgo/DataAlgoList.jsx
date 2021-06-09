import React, { useState, useEffect } from 'react';
import DataAlgoCard from './DataAlgoCard.jsx';
import './DataAlgo.css';

const codeforcesJson = fetch('https://codeforces.com/api/user.info?handles=ryuuoh')
.then(response => response.json)
.then(user => {
  return user;
})

const DataAlgoList = () => {
  const [codeforces, setCodeforces] = useState([]);
  const [codewars, setCodewars] = useState([]);

  useEffect(() => {
    Promise.all([
        fetch('https://codeforces.com/api/user.info?handles=ryuuoh'),
        fetch('https://www.codewars.com/api/v1/users/ryuuohlee')
      ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(results => {
      setCodewars(results[1])
      setCodeforces(results[0].result[0])
    })
  }, [])

  console.log(codeforces, codewars)

  return (
    <div className="contests">
      <DataAlgoCard codeforces={codeforces} />
      <DataAlgoCard codewars={codewars} />
    </div>
  )
};

export default DataAlgoList;