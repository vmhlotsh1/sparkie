import React, {Component} from 'react';
import {Button, Grid, Jumbotron} from "react-bootstrap";
import {Link} from "react-router-dom";

class About extends Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        e.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-xs-5" style={{height : '100vh',backgroundImage : 'url(/assets/stuffing.png)', backgroundColor :'#DC683E' ,color: 'white' }}>
                        <div className="introWrapper">
                            <Grid>
                                <Jumbotron>
                                    <div className="col-xs-12">
                                        <h2 className="col-xs-6">Welcome back from your break! </h2>
                                    </div>
                                    <div className="col-xs-12">
                                        <p className="col-xs-6">Time to continue paving the way for hard working learners. </p>
                                    </div>
                                </Jumbotron>

                            </Grid>
                        </div>
                    </div>
                    <div className="col-xs-7">
                        <div className="contentWrapper">
                            <h3>Let’s get started now! <span>Your key to success starts here.</span></h3>
                            <div className="formWrapper">
                                <form>
                                    <div>
                                        <input type="radio" />
                                        <label>Learner </label>
                                        <input type="radio" />
                                        <label>Teacher </label>
                                    </div>
                                    <input type="text" name="username" placeholder="Username "/>
                                    <input type="password" name="password" placeholder="Password "/>
                                    <input type="submit" value="login" onClick={this.handleSubmit}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;