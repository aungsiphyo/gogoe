import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`fixed z-10 w-full g-gray-800 text-white ${darkMode ? 'bg-gray-900' : 'bg-white text-gray-950'} shadow-sm`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Left section */}
          <div className="block sm:hidden absolute top-3 inset-y-0 left-0 items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
            <div className="text-gray-950 dark:text-white text-xl font-bold ml-12 sm:ml-0">
                ‌<Link to={"/"} href="#home">GO GOE</Link>
            </div>
            {/* Center section */} 
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
              <div className="hidden sm:flex sm:space-x-1x ml-10">
                <a href="#home" className="text-gray-600 hover:text-gray-900 dark:text-white px-2 py-2 rounded-md text-md font-medium">
                  Home
                </a>
                <a href="#features" className="text-gray-600 hover:text-gray-800 dark:text-white px-2 py-2 rounded-md text-md font-medium">
                  Features
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-800 dark:text-white px-2 py-2 rounded-md text-md font-medium">
                  Pricing
                </a>
                <a href="#contact" className="text-gray-600 hover:text-gray-800 dark:text-white px-2 py-2 rounded-md text-md font-medium">
                  Contact
                </a>
                <a href="#control" className="text-gray-600 hover:text-gray-800 dark:text-white px-2 py-2 rounded-md text-md font-medium">
                  Bot Control
                </a>
              </div>
            </div>

            {/* Right section */}
            <div className="absolute inset-y-0 right-0 flex items-center space-x-4">
              <Link to={"/login"} className="hidden md:block text-gray-800 dark:text-gray-300 hover:text-gray-950 px-3 py-2 rounded-md text-base font-medium">
                Login
              </Link>
              <Link to={"/register"} className="hidden md:block text-gray-100 bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-base font-medium">
                Register
              </Link>
              {/* <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                {darkMode ? (
                  <MdDarkMode className="h-6 w-6" />
                ) : (
                  <IoSunny className="h-6 w-6" />
                )}
              </button> */}
              <div onClick={toggleDarkMode} className={classNames('shadow-lg flex w-10 h-5 bg-gray-400 rounded-full transition-all duration-500',{'bg-green-600' : darkMode})}>
                <span className={classNames('h-5 w-5 bg-white rounded-full transition-all duration-500',{'ml-5' : darkMode})}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-950`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a onClick={toggleMenu} href="#home" className="text-gray-800 dark:text-gray-200 hover:bg-gray-500 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a onClick={toggleMenu} href="#features" className="text-gray-800 dark:text-gray-200 hover:bg-gray-500 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
            Features
          </a>
          <a onClick={toggleMenu} href="#pricing" className="text-gray-800 dark:text-gray-200 hover:bg-gray-500 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
            Pricing
          </a>
          <a onClick={toggleMenu} href="#contact" className="text-gray-800 dark:text-gray-200 hover:bg-gray-500 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
          <a onClick={toggleMenu} href="#control" className="text-gray-800 dark:text-gray-200 hover:bg-gray-500 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
            Bot Control
          </a>
          <div className="account flex justify-between">
            <Link to={"/login"} className="text-gray-800 dark:text-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
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