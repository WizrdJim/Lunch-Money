import React, { Component } from 'react';
import DonorList from '../../Dummy Data/dummy_donor';
import SchoolList from '../../Dummy Data/dummy_school';
import ProgressBarInstance from './progressBar';
//import Donor from '../Donors';

const list = DonorList.map((item, index)=> {
  return item
})
const lunchCost = 3;

class Schools extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      { SchoolList.map((item, index)=> {
          return(
            <div key={index.toString()}>
            <img src={item.Image}/> 
            <div>
              <h2>{item.Name}</h2>
              <h3>Mascot: {item.Mascot}</h3>
              <h3>Founded: {item.Founded}</h3>
              <ProgressBarInstance />
            </div>
            <div>
              <h3>Lunches Provided: {item.Donations / lunchCost}</h3>
              <h3> Lunches Needed: {item.DonationsNeeded / lunchCost}</h3>
            </div>
            <h3>Donors</h3>
            {/*<Donor donors={list} />*/}
            </div>
          )
        })}
      </div>
    );

  }
}

export default Schools