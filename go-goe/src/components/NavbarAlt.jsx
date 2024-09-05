import classNames from 'classnames/bind';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavbarAlt = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 w-full g-gray-800 text-gray-900 dark:text-white bg-white dark:bg-gray-900 shadow-md`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="main-navbar flex justify-between items-center lg:py-10">
            <div className="flex-shrink-0 text-xl font-bold">
                ‌<Link to={"/"} href="#home">GO GOE</Link>
            </div>

            {/* Right section */}
            <div className="absolute inset-y-0 right-0 flex items-center space-x-4">
              <Link to={"/login"} className="text-gray-900 dark:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                Login
              </Link>
              <Link to={"/register"} className="text-gray-100 bg-red-600 hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarAlt