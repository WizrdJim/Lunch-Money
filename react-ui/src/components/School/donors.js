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
<<<<<<< HEAD
  constructor(){
  super();

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

=======
  constructor(props){
  super(props);
  
  this.state = {
    users: props.donors,
    donations: "",
    message: ""
  }
}

>>>>>>> 584cc14ccbb507896f40cf739ea5dd05a24ca85c
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