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
            <nav className=" bg-black">
            <div className=" max-w-6xl mx-auto px-2">
                <div className="flex justify-between">

                    <div className="flex space-x-4 text-white">

                        <div>
                            <Link to="/" className="flex items-center py-5 px-2 text-slate-50 hover:text-red-700 rounded transition duration-100">
                                <span className="font-bold text-2xl">GameHaven</span>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-3">
                            <Link to="/search" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500"><CgGames/> Top 100</Link>
                            <Link to="/forum" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500">< MdOutlineForum /> Forum</Link>
                            <Link to="/search" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500">< BiHelpCircle /> About</Link>
                        </div>

                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <Link to="/logout" className="py-5 px-3 text-gray-300 hover:text-gray-500"><BiLogIn /> Logout</Link>                    </div>
                    </div>
            </div>

            <div class="mobile-menu hidden md:hidden">
                <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
            </div>

        </nav>
        )
    }

    return(

        <nav className=" bg-black">
            <div className=" max-w-6xl mx-auto px-2">
                <div className="flex justify-between">

                    <div className="flex space-x-4 text-white">

                        <div>
                            <Link to="/" className="flex items-center py-5 px-2 text-slate-50 hover:text-red-700 rounded transition duration-100">
                                <span className="font-bold text-2xl">GameHaven</span>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-3">
                            <Link to="/search" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500"><CgGames/> Top 100</Link>
                            <Link to="/forum" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500">< MdOutlineForum /> Forum</Link>
                            <Link to="/search" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500">< BiHelpCircle /> About</Link>
                        </div>

                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <Link to="/login" className="py-5 px-3 text-gray-300 hover:text-gray-500"><BiLogIn /> Login</Link>
                        <Link to="/register" className="py-2 px-3 bg-slate-50 hover:bg-red-700 text-stone-900 hover:text-slate-50 rounded transition duration-100">Register</Link>
                    </div>
                </div>
            </div>

            <div class="mobile-menu hidden md:hidden">
                <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
            </div>

        </nav>
        
        // <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        //     <Container>
        //             <Link to="/" className="navbar-brand">
        //                 GameHaven
        //             </Link>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="me-auto">

        //                 <div className="search-nav">
        //                 <form>
        //                     <div className="float-start">
        //                         <input type="text" className="form-control" placeholder="Search Game..." style={{marginTop: 8}}
        //                                onChange={(e) => setSearch(e.target.value)}
        //                         />
        //                     </div>

        //                     <div className="float-start">
        //                         <button type="submit" className="btn btn-outline-primary" style={{marginTop: 8}} value="Submit" onClick={submitHandler}>
        //                             Search
        //                         </button>
        //                     </div>
        //                 </form>
        //                 </div>

        //                     <NavDropdown title={<span><CgGames/> Games</span>} children={""}/>

        //                     <Link to="/forum" className="nav-link">
        //                         < MdOutlineForum /> Forum
        //                     </Link>
        //                     <Link to="/about" className="nav-link">
        //                         < BiHelpCircle /> About
        //                     </Link>

        //             </Nav>

        //             <Nav>
        //                 <Link to="/login" className="nav-link login">
        //                     <BiLogIn /> Login
        //                 </Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )
}

export default NavbarBase;