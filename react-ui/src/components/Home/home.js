import React from 'react';
import './home.css';



const Dummy = (props) => {

  const handleOnClick = (e) => {
    
  };

  return(
    <div>
      <h1 className="home--menu" onClick={handleOnClick}>
        SOME TEXT HERE YAY.
        {props.text}
      </h1>
      </div>
  );
}
export default Dummy;