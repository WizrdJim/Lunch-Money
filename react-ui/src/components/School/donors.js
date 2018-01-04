import React, { Component } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route 
} from 'react-router-dom';


  class Donors extends Component {
  constructor(){
  super();
  
  this.state = {
    user: [],
    name: "",
    donations: "",
    message: ""
  }

}
componentDidMount();

getImage = (search_term) => {
  //some code
  search_term.map( (img, id) => {
    return(
      <ul>
      <li>
        {user.id.img.url} 
        </li>
        </ul>
    );
  });
}
    render() {
      return(
        <div>
          <div>
          <img src={user.thumbnailUrl}/>
          <p>{history.name}</p>
          <p>{history.donation}</p>
          <p>{history.message}</p>
          </div>
          </div>
      );
    };
}

connect(mapStateToProps, somethingelse )(theFileName)


export default Thumbnail;