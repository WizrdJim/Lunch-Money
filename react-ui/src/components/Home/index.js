import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Thumbnail} from 'react-bootstrap'
import {Col} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

class HomePage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div> 
                <Jumbotron className='jumbotron'>
                    <div>
                        {/* <Navbar /> */}
                    </div>
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