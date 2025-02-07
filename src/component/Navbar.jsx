import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-200 fixed z-10 opacity-70">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu font-serif menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Link to='/'><li><a>Home</a></li></Link>
                            <Link to='/details'><li><a>Details</a></li></Link>
                            <Link to='/about'><li><a>About</a></li></Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold">Trello</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-semibold menu-horizontal px-1">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='/details'><li><a>Details</a></li></Link>
                        <Link to='/about'><li><a>About</a></li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;