import React, { Component } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route 
} from 'react-router-dom';
import { Button } from 'react-bootstrap';


  class Donors extends Component {
  constructor(props){
  super(props);
  
  this.state = {
    users: props.donors,
    donations: "",
    message: ""
  }
}

handle
    render() {
      return(
        <div>
          <div className="donors--container">
          <img src={users.thumbnailUrl}/>
          <p>{history.name}</p>
          <p>{history.donation}</p>
          <p>{history.message}</p>
          </div>
          </div>
      );
    };
}

export default Thumbnail;