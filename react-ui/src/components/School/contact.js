import React, { Component } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route 
} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SchoolList from '../Dummy_Data/dummy_schools.js'

  class Contact extends Component {
  constructor(props){
  super(props);
  
  this.state = {
    Phone: null,
    Email: []
  }
}



info = () => {
  SchoolList.map((info, id) => {
    return(
      <ul>
      <li>
        {this.props.Phone}
        {this.props.Email}
        </li>
        </ul>
    );

  }
  )
}


    render() {
      return(
        <div>
          <div className="contact">
          
          <img src="" alt=""/><p>{history.email}</p>
          <img src="" alt=""/><p>{school.phone}</p>
          <img/> <p>{school.websiteUrl}</p>
          </div>
          <div>
            <a><i>{twitter}</i></a>
            <a><i>{facebook}</i></a>
            {/* {/* 
  <i class="fa fa-twitter" aria-hidden="true"></i>
*/}
            <a><i>{email}</i></a>
            </div>
          </div>
      );
    };
}

export default Contact;