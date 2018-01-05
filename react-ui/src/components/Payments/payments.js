import React, { Component } from "react";
import { 
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

class Payments extends Component {
constructor(props) {
  super(props);

  this.state = {
    Donate: null,
    Name: "",
    Routing: null,
    Acount: null
  }
}

handleClick = (e) => {
e.preventDefault();
this.setState(
{
  Donate: e.target.value,
  Name: e.target.value,
  Routing: e.target.value,
  Account: e.target.value
}
  );
}
alert1 = () => {
  const msg = () => {
    return alert(console.log("Your Payment Has Been Processed!"))
  }
  return(
    <div>
      {msg1}
      </div>
  );
  alert2 = () => {
    const msg = () => {
      return alert(console.log("Your Payment Has Been Cancelled"))
    }
    return(
      <div>
        {msg2}
        </div>
    );
  

}

render() {
  return(
    <div>
        <div>
          <h1>$Lunch Money$</h1>
          </div>
      <div>
      <form>
        <input type="text" active placeholder="Name" onclick= {handleClick}  className="payment--name"/>
        <input type="text" placeholder="Routing Number" onclick= {handleClick} className="payment--routing"/>
          <input type="text" placeholder="Account Number" onclick= {handleClick} className="payment--account"/>
          < input type="text" placeholder="Total" onclick= {handleClick} className="payment--total"/>
        </form>
        </div>
        <button onClick={alert2}> CANCEL </button> <button onClick={alert1}> DONATE!</button>
    </div>
    );
  }
}

export default Payments;