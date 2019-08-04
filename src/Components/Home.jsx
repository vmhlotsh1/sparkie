import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Grid, Col, Row, Button} from 'react-bootstrap';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <div className="col-xs-12">
                    <h2 className="col-xs-6">Decentralise your child’s way of learning. </h2>
                    </div>
                    <div className="col-xs-12">
                    <p className="col-xs-6">The foundation phase is an important aspect of your learners' education growth as it impacts their way of learning throughout their education. Give your learners’ a head start in learning confidently and comfortability. </p>
                    </div>
                    <div className='btnWrapper'>
                    <Link to="/donate">
                        <Button bsStyle="primary"> Become A Sponsor </Button>
                    </Link>
                    <Link to="/about">
                        <Button bsStyle="primary"> Register Your School </Button>
                    </Link>
                    </div>
                </Jumbotron>

            </Grid>
        );
    }
}

export default Home;