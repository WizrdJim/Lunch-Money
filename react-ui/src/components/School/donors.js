import React, { Component } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route 
} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import DonorList from '../../Dummy Data/dummy_donor';


  class Donors extends Component {
  constructor(props){
  super(props);
  
  this.state = {
    FirstName: "",
    LastName: "",
    ImageUrl: "",
    Amount: 50,
      Date: ""
    }
}
getData = () => {
  DonorList.map( (item, index) => {
    return (
    <div>
      <li>
        {item.FirstName}
        {item.LastName}
        {item.ImageUrl}
        {item.Amount}
        {item.Date}
        </li>
    </div>
    );
  })

}

    render() {
      return(
        <div key={index} className="donors--container">
          <div className="donors--detail">
            {getData()}
          </div>
          </div>
      );
    };
}

export default Donors;