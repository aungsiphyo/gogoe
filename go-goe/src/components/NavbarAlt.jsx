import classNames from 'classnames/bind';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavbarAlt = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 w-full g-gray-800 text-white ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="main-navbar flex justify-between items-center lg:py-10">
            <div className="flex-shrink-0 text-xl font-bold">
                ‌<Link to={"/"} href="#home">GO GOE</Link>
            </div>

            {/* Right section */}
            <div className="absolute inset-y-0 right-0 flex items-center space-x-4">
              <Link to={"/login"} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Login
              </Link>
              <Link to={"/register"} className="text-gray-100 bg-red-600 hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium">
                Register
              </Link>
              <div onClick={toggleDarkMode} className={classNames('shadow-lg flex w-10 h-5 bg-gray-400 rounded-full transition-all duration-500',{'bg-green-600' : darkMode})}>
                <span className={classNames('h-5 w-5 bg-white rounded-full transition-all duration-500',{'ml-5' : darkMode})}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarAlt