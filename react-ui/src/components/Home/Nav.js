import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button } from 'reactstrap';
  
class Navigation extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isOpen: false
      };
    }
    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Lunch Money</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button onClick={this.props.onSignUpClick}>Sign Up</Button>
                </NavItem>
                <NavItem>
                  <Button onClick={this.props.onLoginClick}>Log in</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
      );
    }
  }

export default Navigation;