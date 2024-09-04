import React, { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`fixed z-10 w-full g-gray-800 text-white ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Left section */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`hidden h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="main-navbar flex justify-between items-center lg:py-10">
            <div className="flex-shrink-0 text-xl font-bold">
                ‌<Link to={"/"} href="#home">GO GOE</Link>
            </div>
            {/* Center section */} 
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
              <div className="hidden sm:flex sm:space-x-1x ml-10">
                <a href="#home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  Home
                </a>
                <a href="#features" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  Features
                </a>
                <a href="#pricing" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  Pricing
                </a>
                <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  Contact
                </a>
                <a href="#control" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  Bot Control
                </a>
              </div>
            </div>

            {/* Right section */}
            <div className="absolute inset-y-0 right-0 flex items-center space-x-4">
              <Link to={"/login"} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Login
              </Link>
              <Link to={"/register"} className="text-gray-100 bg-red-600 hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium">
                Register
              </Link>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                {darkMode ? (
                  <MdDarkMode className="h-6 w-6" />
                ) : (
                  <IoSunny className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="#features" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Features
          </a>
          <a href="#pricing" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Pricing
          </a>
          <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
          <a href="#control" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Bot Control
          </a>
          <div className="account flex justify-between">
            <Link to={"/login"} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Login
            </Link>
            <Link to={"/register"} className="text-gray-100 bg-red-600 hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium">
                Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;