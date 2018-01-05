import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a className='navbar-brand'> Lunch Money</a>
        <div className='navbar-form'>
          {!authenticated && 
          <div>
           <Login
            errorMessage={ errorMessage }
            onLoginClick={(user) => dispatch(login(user, this.props.history))}
            />
            <Button onClick={this.props.onClick}> Create Account </Button>
          </div>
          }
          
          {authenticated && 
            <div>
              <Logout onLogoutClick={ () => dispatch(logout(this.props.history))}
                />
                <Link to='user'> Home </Link>
            </div>
            }
          </div>
        </div>
      </nav>
    )
  }
}