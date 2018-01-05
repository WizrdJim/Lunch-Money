import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';



const ProgressBarInstance = (props) => {
  progressInstance = () => {
    const progressInstance = <ProgressBar now={props.donations/props.donationsNeeded * 100} />;
    return(
      progressInstance
    );
  }
  return(
    <div>
      {this.progressInstance()}
      </div>
  );
}
export default ProgressBarInstance;