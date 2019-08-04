import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNav.css'

class CustomNav extends React.Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Sparkie</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to="/home">
                            HOME
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/about">
                            ABOUT US
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/donate">
                            DONATE
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} to="/contact">
                            CONTACT US
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} to="/login">
                            <Button bsStyle="secondary" className="btn-secondary"> Login </Button>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNav;