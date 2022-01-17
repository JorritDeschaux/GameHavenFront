import React, {useState} from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'
import {BiHelpCircle, BiLogIn, BiLogOut} from 'react-icons/bi'
import {CgGames, CgProfile, MdOutlineForum} from "react-icons/all";


function NavbarBase(props)
{
    const [search, setSearch] = useState("");
    const [showNav, setShowNav] = useState(false);

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
                            <Link to="/top100" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500"><CgGames/> Top 100</Link>
                            <Link to="/forum" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500">< MdOutlineForum /> Forum</Link>
                            <Link to="/about" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500">< BiHelpCircle /> About</Link>
                        </div>

                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <Link to="/logout" className="py-5 px-3 text-gray-300 hover:text-gray-500"><BiLogIn /> Logout</Link>
                        <Link to="/profile" className="logout py-2 px-3 bg-slate-50 hover:bg-red-700 text-stone-900 hover:text-slate-50 rounded transition duration-100">Profile</Link>
                    </div>

                </div>
            </div>

            <div className={"md:hidden mobile-menu"}>
                <div className="hidden md:flex items-center space-x-3">
                <Link to="/search" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500"><CgGames/> Top 100</Link>
                <Link to="/forum" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500">< MdOutlineForum /> Forum</Link>
                <Link to="/about" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500">< BiHelpCircle /> About</Link>
                </div>
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
                            <Link to="/top100" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500"><CgGames/> Top 100</Link>
                            <Link to="/forum" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500">< MdOutlineForum /> Forum</Link>
                            <Link to="/about" href="#" className="py-5 px-3 text-gray-300 hover:text-gray-500">< BiHelpCircle /> About</Link>
                        </div>

                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <Link to="/login" className="py-5 px-3 text-gray-300 hover:text-gray-500"><BiLogIn /> Login</Link>
                        <Link to="/register" className="py-2 px-3 bg-slate-50 hover:bg-red-700 text-stone-900 hover:text-slate-50 rounded transition duration-100">Register</Link>
                    </div>
                </div>
            </div>

            <div className="mobile-menu hidden md:hidden">
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
            </div>

        </nav>
    )
}

export default NavbarBase;