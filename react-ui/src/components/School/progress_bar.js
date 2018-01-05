import React from 'react';
import { ProgressBar } from 'react-bootstrap';



const ProgressBarInstance = (props) => {
  const progressInstance = () => {
    const progress = <ProgressBar now={props.donations/props.donationsNeeded * 100} />;
    return(
      progress
    );
  }
  return(
    <div>
      {progressInstance()}
      </div>
  );
}
export default ProgressBarInstance;