import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';



class ProgressBarInstance extends Component {
  constructor(props) {
    super(props);
  }

  progressInstance = () => {
    const progressInstance = <ProgressBar now={60} />;
    return(
      progressInstance
    );
  }
  render() {
    return(
      <div>
        {this.progressInstance()}
        </div>
    );


  }


}
export default ProgressBarInstance;