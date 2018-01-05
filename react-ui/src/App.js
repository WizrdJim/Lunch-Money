import React, { Component } from 'react';
import logo from './logo.svg';
// import img from './LunchMoney_logo.png';
import './App.css';
import Login from './containers/Login';
import DonorPage from './components/Donors';
import PaymentPage from './components/Payments';
import SchoolPage from './components/School';
import { Route } from 'react-router-dom';


import ProgressBarInstance from './components/School/progress_bar';
// import Thumbnail from './components/School/thumbnail';
import SchoolList from './Dummy Data/dummy_school';

import HomePage from './components/Home/index.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      school: true,
    }
  }
  
  render() {
    return(
      <div>
        <Route path="/" component={ HomePage } />
        <Route path="/donor" component={DonorPage} />
        <Route path="/school" component={SchoolPage} />
        <Route path="/payment" component={PaymentPage} />
      </div>
    )
  }
}

export default App;
