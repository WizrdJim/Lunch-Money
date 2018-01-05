import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';

class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div> 
                <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Text pullRight href="#">Sign Up</Navbar.Text>
                    <Navbar.Text pullRight href="#">Login</Navbar.Text>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Nav;