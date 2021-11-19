import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Container} from "react-bootstrap";
import axios from "../Axios/axios";

const Layout =({children}) =>{

    const [search, setSearch] = useState([]);

    const submitHandler = (e) => {e.preventDefault()
        axios.post('/search/' + search, {

        })
            .then(response => {
                window.location = "/Games/"
            })}

    return(
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">GameHaven</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <form>
                            <input type="text" placeholder="Search Game..." style={{marginTop: 5}}
                                   onChange={(e) => setSearch(e.target.value)}
                            />
                            <button type="submit" value="Submit" onClick={submitHandler}>
                                Search
                            </button>
                        </form>
                        <Nav.Link href="Games">Games</Nav.Link>
                        <Nav.Link href="Forum">Forum</Nav.Link>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="Login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Layout;