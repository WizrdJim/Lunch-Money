import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Thumbnail} from 'react-bootstrap'
import {Col} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Nav from './Nav';
import Login from '../../containers/Login';


class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            login: true,
            school: true,
            modal: false,
        }
    }
    onSignUpClick=() => {
        this.setState({
            modal: true,
            login: false
        })
    }
    onLoginClick = () => {
        this.setState({
            modal: true,
            login: true
        })
    }
    toggle =()=> {
        this.setState({
          modal: !this.state.modal
        });
      }

    render() {
        return (
            <div> 
                <div>
                    <Nav onSignUpClick={this.onSignUpClick} onLoginClick={this.onLoginClick}/>
                </div>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Login login={this.state.login}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                </div>
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
                </Jumbotron>
            </div>
        )
    }
}

export default HomePage;