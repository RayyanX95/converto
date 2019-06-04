import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
    return (
        <div className={classes.Color}>
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="#home">Converter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={classes.mrAuto + " mr-auto"}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#abput">About</Nav.Link>
                        {/* <NavDropdown className={classes.Dropdown} title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item className={classes.Item}  href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Form inline>
                        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                        {/* <Button variant="outline-success">Search</Button> */}
                        <Nav className="mr-auto">
                            <Nav.Link className='mx-5' href="#signin">Signin</Nav.Link>
                        </Nav>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;