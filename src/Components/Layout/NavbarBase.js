import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import {Container} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarBase(props)
{

    const [search, setSearch] = useState("");

    const submitHandler = (e) => {e.preventDefault()

        console.log("pressed")

        window.location = '/games/' + search

    }

    if(props)
    {
        return(
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/">GameHaven</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <form>
                                <input type="text" className="form-control" placeholder="Search Game..." style={{marginTop: 5}}
                                       onChange={(e) => setSearch(e.target.value)}
                                />
                                <button type="submit" className="btn btn-sm" value="Submit" onClick={submitHandler}>
                                    Search
                                </button>
                            </form>
                            <Nav.Link href="games">Games</Nav.Link>
                            <Nav.Link href="forum">Forum</Nav.Link>
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
                            <Nav.Link href="logout">
                                Logout
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

    return(
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">GameHaven</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <form>

                            <div className="float-start">
                                <input type="text" className="form-control" placeholder="Search Game..." style={{marginTop: 8}}
                                       onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            <div className="float-start">
                                <button type="submit" className="btn btn-outline-primary" value="Submit" onClick={submitHandler}>
                                    Search
                                </button>
                            </div>

                        </form>
                        <Nav.Link href="games">Games</Nav.Link>
                        <Nav.Link href="forum">Forum</Nav.Link>
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
                        <Nav.Link href="login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarBase;