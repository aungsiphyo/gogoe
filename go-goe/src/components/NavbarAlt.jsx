import React, { useState } from 'react'
import { IoSunny } from 'react-icons/io5';
import { MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NavbarAlt = () => {
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
    </nav>
  )
}

export default NavbarAlt