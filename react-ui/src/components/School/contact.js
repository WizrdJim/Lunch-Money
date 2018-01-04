import React, { Component } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route 
} from 'react-router-dom';
import { Button } from 'react-bootstrap';


  class Contact extends Component {
  constructor(props){
  super(props);
  
  this.state = {
    number: [],
    email: [],
    websiteUrl: []
  }
}

componentDidMount();

getinfo = (search_term) => {
  //some code
  search_term.map( (num, id) => {
    return(
      <ul>
      {/*<li>
        {school.id.number
        school.id.email,
        school.id.websiteUrl} 
        </li>
        </ul>*/}
    );
  });
}
{/*getEmail = (search_term) => {
  //some code
  search_term.map( (num, id) => {
    return(
      <ul>
      <li>
        {school.id.number} 
        </li>
        </ul>
    );
  });*/}


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