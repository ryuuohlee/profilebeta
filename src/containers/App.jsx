import React from 'react';
import Navbar from './Navbar.jsx';
import Home from '../components/Home.jsx';
import Offer from '../components/Offer.jsx';
import Portfolio from './Portfolio.jsx';
import Experience from '../containers/Experience.jsx';
import Education from './Education.jsx';
import CV from '../components/CV.jsx';
import css from './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      show: false
    }
  }

  // showModal = e => {
  //   this.setState({
  //     show: true
  //   });
  // };

  render() {
    return(
      <Router>
        <div className='home-parent'>
          <Navbar show={this.state.show}/>
          <div className="site-main-home">
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/offer" component={Offer} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
            <Route path="/cv" component={CV} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;