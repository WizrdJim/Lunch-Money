import React, { Component } from 'react';
import logo from './logo.svg';
// import img from './LunchMoney_logo.png';
import './App.css';
import {Button} from 'react-bootstrap';
import Login from './containers/Login';
import ProgressBarInstance from './components/School/progressBar';
import {Jumbotron} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Thumbnail} from 'react-bootstrap'
import {Col} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

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
        <Jumbotron className='jumbotron'>
          <div className='logo'>
            <Image src={require('./LunchMoney_logo.png')} responsive />
          </div>
          <form>
            <FormGroup className='searchbox'>
              <FormControl type="text" placeholder="Search for School" />
            </FormGroup>
          </form>
          <Grid>
          <Row className='row'>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src={require("./placeholder.png")} />
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src={require("./placeholder.png")}  />
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src={require("./placeholder.png")}  />
            </Col>
          </Row>
          <Row className='row'>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src={require("./placeholder.png")} />
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src={require("./placeholder.png")}  />
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src={require("./placeholder.png")}  />
            </Col>
          </Row>
        </Grid>
		      <p>
			      <Button bsStyle="primary">Learn more</Button>
		      </p>
	      </Jumbotron>
        {/* <div>
          <Button onClick={()=> this.setState({school: !this.state.school})}> {this.state.school? "School" : "Donor"} </Button>
          <h1> {this.state.login ? 'Login' : 'SignUp'} </h1>
          <Login login={this.state.login}/>
          <Button onClick={()=> this.setState({login: !this.state.login})}>{this.state.login ? "Don't an account" : 'Login'}</Button>
        </div>
        <div>
          <ProgressBarInstance />
        </div>
        <div>
          <ProgressBarInstance />
        </div> */}
      </div>
    )
  }
}

export default App;
