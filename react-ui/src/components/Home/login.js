import React, { Component } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route 
} from 'react-router-dom';
import { Button } from 'react-bootstrap';


  class Login extends Component {
  constructor(props){
  super(props);
  
  this.state = {
    total: "",
    id: ""
  }
}

componentDidMount(){


};

donate = () => {

}

getTotal = () => {
  //some code
}

graph = () => {
  //const progressInstance = <ProgressBar active now={45} />;
  const now;
  now = this.state.total; // takes a property that's a method for the progress bar
}
  render() {
    return(
      <div>
        <div className="home--login"> 
        {theprogressbar}
        </div>
        <button>{donate}</button>
        </div>
    );
  };
}

export default Login;