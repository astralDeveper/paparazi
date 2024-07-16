import React, { useState } from 'react';
import img from '../../assets/logo (2).png';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="sm:flex sm:justify-between sm:items-center sm:px-20 sm:py-3" style={{ background: '#363636' }}>
            {/* Logo */}
            <div className="max-w-screen-2xl flex items-center justify-between px-4 py-3 sm:w-[70%] sm:p-0">
                <div className="flex items-center">
                    <img className="h-16" src={img} alt="Logo" />
                </div>
                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16M4 12h16M4 18h16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16M4 12h16M4 18h16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Navbar Links */}
            <nav className={`sm:flex ${isOpen ? 'block' : 'hidden'} px-2 pt-2 pb-4 sm:w-full sm:justify-between  sm:p-0 sm:flex mg:justify-end  sm:items-center`}>
                <div className="px-2 pt-2 pb-4  sm:flex sm:items-center  ">
                   <Link to="/">
                   <a
                      
                        className="block px-2 py-1 text-white font-semibold  text-golden border-b-2" style={{ borderColor: '#D2940A' }}
                    >
                        Home
                    </a>
                   </Link>
                    <Link to="/about">
                    <a
                 
                        className="mt-1 block px-2 py-1 text-white font-semibold rounded  sm:mt-0 sm:ml-2"
                    >
                        About
                    </a>
                    </Link>
                    <Link to="/services">
                    <a
                        href="/"
                        className="mt-1 block px-2 py-1 text-white font-semibold rounded  sm:mt-0 sm:ml-2"
                    >
                        Services
                    </a>
                    </Link>
                    <Link to="/career">
                    <a
                        href="/"
                        className="mt-1 block px-2 py-1 text-white font-semibold rounded  sm:mt-0 sm:ml-2"
                    >
                        Careers
                    </a>
                    </Link>
                    <Link to="/career2">
                    <a
                        href="/"
                        className="mt-1 block px-2 py-1 text-white font-semibold rounded  sm:mt-0 sm:ml-2"
                    >
                        Careers
                    </a>
                    </Link>
                </div>

                {/* Buttons */}
                <div className="px-4 py-3 sm:flex sm:items-center">
                    <button
                        className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600 font-semibold"
                    >
                        Login
                    </button>
                    <button
                        className="ml-4 border border-yellow-500 text-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-gray-900 font-semibold"
                    >
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;