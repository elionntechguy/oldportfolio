import React from 'react';
import styled from 'styled-components';
import '../App.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #ffffff !important;
        opacity: 0.9;

        transition: 0.15s ease;
        text-decoration: none;


        &:hover {
            text-decoration: none;
            color: #ffffff !important;
            opacity: 1.0;
        }

    }

    .navbar-brand {
        margin-left: 1rem;
        opacity: 1.0;
    }

    .navbar-collapse {
        margin-right: 1rem;
    }
    
    .navbar {
        background-color: #032539;
    }

    .navbar-nav {
        align-items: center;
    }

`;
function NavigationBar() {
    return (
        <Styles>
            <Navbar sticky="top" expand="lg" variant="dark">
                <Navbar.Brand href="/">Elion Shkololli</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/work">
                                    work
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/about">
                                    about
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/contact">
                                    contact
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

export default NavigationBar
