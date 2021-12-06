import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import {Container} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import './Navbar.css'
import {BiHelpCircle, BiLogIn, BiLogOut} from 'react-icons/bi'
import {CgGames, CgProfile, MdOutlineForum} from "react-icons/all";


function NavbarBase(props)
{
    const [search, setSearch] = useState("");

    const submitHandler = (e) => {e.preventDefault()

        console.log("pressed")

        window.location = '/search/' + search

    }

    if(props)
    {
        return(
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Link to="/" className="navbar-brand">
                        GameHaven
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <div className="search-nav">
                                <form>
                                    <div className="float-start">
                                        <input type="text" className="form-control" placeholder="Search Game..." style={{marginTop: 8}}
                                               onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </div>

                                    <div className="float-start">
                                        <button type="submit" className="btn btn-outline-primary" style={{marginTop: 8}} value="Submit" onClick={submitHandler}>
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <NavDropdown title={<span><CgGames/> Games</span>} children={""}/>

                            <Link to="/forum" className="nav-link">
                                < MdOutlineForum /> Forum
                            </Link>
                            <Link to="/about" className="nav-link">
                                < BiHelpCircle /> About
                            </Link>

                        </Nav>

                        <Nav>
                            <Link to="/profile" className="nav-link">
                                <CgProfile /> Profile
                            </Link>
                            <Link to="/logout" className="nav-link">
                                <BiLogOut /> Logout
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

    return(
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                    <Link to="/" className="navbar-brand">
                        GameHaven
                    </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <div className="search-nav">
                        <form>
                            <div className="float-start">
                                <input type="text" className="form-control" placeholder="Search Game..." style={{marginTop: 8}}
                                       onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            <div className="float-start">
                                <button type="submit" className="btn btn-outline-primary" style={{marginTop: 8}} value="Submit" onClick={submitHandler}>
                                    Search
                                </button>
                            </div>
                        </form>
                        </div>

                            <NavDropdown title={<span><CgGames/> Games</span>} children={""}/>

                            <Link to="/forum" className="nav-link">
                                < MdOutlineForum /> Forum
                            </Link>
                            <Link to="/about" className="nav-link">
                                < BiHelpCircle /> About
                            </Link>

                    </Nav>

                    <Nav>
                        <Link to="/login" className="nav-link login">
                            <BiLogIn /> Login
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarBase;