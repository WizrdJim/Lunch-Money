import React, { Component } from "react";
import {Button} from "react-bootstrap";
class Login extends Component {
  constructor() {
    super();
    this.state ={
      username: '',
      password: '',
      confirmPassword: ''
    }
  }
  handleUsername = (event) => {
    this.setState({username: event.target.value})
  }
  handlePassword = (event) => {
    this.setState({password: event.target.value})
  }
  handleConfirmPassword = (event) => {
    this.setState({confirmPassword: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {username, password, confirmPassword} = this.state;
    const user = {
      username,
      password,
      confirmPassword
    };
    console.log('username: ' + username);
    console.log(confirmPassword);
    this.props.register(user, this.props.history);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>Username:</label>
            <input value={this.state.username} type='text' placeholder='Username' onChange={this.handleUsername}/>
          </fieldset>
          <fieldset>
            <label>Password:</label>
            <input value={this.state.password} type='password' placeholder='Password' onChange={this.handlePassword}/>
          </fieldset>
          {this.props.login?null:<fieldset>
            <label>Confirm Password:</label>
            <input value={this.state.confirmPassword} type='password' placeholder='Confirm Password' onChange={this.handleConfirmPassword}/>
          </fieldset>}
          <Button type="submit" bsStyle="danger">{this.props.login? 'Login': 'Sign Up'}</Button>
        </form>
      </div>
    );
  }
}

export default Login;