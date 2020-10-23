import React from 'react';
import Navbar from './Navbar.jsx';
import Home from '../components/Home.jsx';
import Offer from '../components/Offer.jsx';
import Experience from '../containers/Experience.jsx';
import Education from './Education.jsx';
import css from './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return(
    <Router>
      <div className='home-parent'>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/offer" component={Offer}>
            <Offer />
          </Route>
          <Route path="/experience" component={Experience} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;