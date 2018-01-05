import React, { Component } from 'react';
import DonorList from '../../Dummy Data/dummy_donor';


class Schools extends Component {
  constructor(props){
    super(props);


  }
  const list = DonorList.map((item, index)=> {
    return item
  })
  const lunchCost = 3;
  render(){
    return(
      <div>
        <img src={props.Image}/> 
        <div>
          <h2>{props.Name}</h2>
          <h3>Mascot: {props.Mascot}</h3>
          <h3>Founded: {props.Founded}</h3>
          <ProgressBarInstance />
        </div>
        <div>
          <h3>Lunches Provided: {props.Donations / lunchCost}</h3>
          <h3> Lunches Needed: {props.DonationsNeeded / lunchCost}</h3>
        </div>
        <h3>Donors</h3>
        <Donor donors={list} />
      </div>
    );

  }
}
