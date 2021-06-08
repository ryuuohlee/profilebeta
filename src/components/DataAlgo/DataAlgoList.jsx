import React, { useState, useEffect } from 'react';

const codeforcesJson = fetch('https://codeforces.com/api/user.info?handles=ryuuoh')
.then(response => response.json)
.then(user => {
  return user;
})

const DataAlgoList = () => {
  const [codeforces, setCodeforces] = useState([]);

  useEffect(() => {
    fetch('https://codeforces.com/api/user.info?handles=ryuuoh')
    .then(response => response.json())
    .then(result => {
      setCodeforces(result.result);
    })
  }, [])

  return (
    <div>
      Hello
    </div>
  )
};

export default DataAlgoList;