import React, { Component } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route 
} from 'react-router-dom';


  class Thumbnail extends Component {
  constructor(){


  const getImage = (search_term) => {
    //some code
    search_term.map( (img, id) => {
      return(
        <ul>
        <li>
          {school.img.url} 
          </li>
          </ul>
      );
    });
  }
}
    render() {
      return(
        <div>
          <img src={getImage}/>
          <p>{school.name}</p>
          <p>{school.address}</p>
          <p>{school.mascot}</p>
          <p>{school.founded}</p>
          <p>{school.id.donations}</p>
          </div>
      );
    };

const mapStateToProps = state => {

}
}

connect(mapStateToProps, somethingelse )(theFileName)
  

export default Thumbnail;