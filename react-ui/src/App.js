import React, { Component } from 'react';

// import img from './LunchMoney_logo.png';
import './App.css';

// import {Button} from 'react-bootstrap';
// import Login from './containers/Login';

import Login from './containers/Login';
import DonorPage from './components/Donors';
import PaymentPage from './components/Payments';
import SchoolPage from './components/School';
import { Route } from 'react-router-dom';



// import ProgressBarInstance from './components/School/progress_bar';
// // import Thumbnail from './components/School/thumbnail';
// import SchoolList from './Dummy Data/dummy_school';
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
        <Route exact path="/" component={ HomePage } />
        <Route path="/donor" component={DonorPage} />
        <Route path="/school" component={SchoolPage} />
        <Route path="/payment" component={PaymentPage} />
      </div>
    )
  }
}

export default App;
