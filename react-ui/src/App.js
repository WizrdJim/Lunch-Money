import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import Login from './containers/Login';
import ProgressBarInstance from './components/School/progress_bar';
import Thumbnail from './components/School/thumbnail';
import SchoolList from './Dummy Data/dummy_school';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      school: true,
    }
  }
  
  render() {
    return(
      <div>
        <h1> Lunch Money </h1>
        <div>
          <Button onClick={()=> this.setState({school: !this.state.school})}> {this.state.school? "School" : "Donor"} </Button>
          <h1> {this.state.login ? 'Login' : 'SignUp'} </h1>
          <Login login={this.state.login}/>
          <Button onClick={()=> this.setState({login: !this.state.login})}>{this.state.login ? "Don't an account" : 'Login'}</Button>
        </div>
        <div>
          {SchoolList.map((item, index)=>{
            return(
              <ProgressBarInstance key={index.toString} 
            donations={item.Donations}
            donationsNeeded={item.DonationsNeeded}
          />
            )  
        })
          }

        </div>
        <div>
          <Thumbnail />
        </div>
      </div>
    )
  }
}

export default App;
