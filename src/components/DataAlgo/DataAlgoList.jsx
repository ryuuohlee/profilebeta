import React from 'react';

class DataAlgoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      codeforces: [],
      codewars: [],
    }
  }

  componentDidMount() {
    const codeforcesResponse = fetch('https://codeforces.com/api/user.info?handles=ryuuoh')
    .then((response) => response.json())
    .then(user => user.result);
    // ([
    //   ,
    //   fetch('https://www.codewars.com/api/v1/users/ryuuohlee')
    // ])
    // .then(([codeforcesResponse, codewarsResponse]) => {
    //   return [
    //     codeforcesResponse.json(),
    //     codewarsResponse.json()
    //   ]
    // })
    // .catch((err) => {
    //   console.log(err);
    // })

    this.setState({ codeforces: codeforcesResponse.then(a => {
      return a;
    })
  })

  console.log(this.state)

  }


  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
};

export default DataAlgoList;