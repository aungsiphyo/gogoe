// src/components/Navbar.jsx
import React, { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`bg-white dark:bg-gray-900 shadow-md p-4 fixed w-full`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold text-red-600 dark:text-red-600">
          GO GOE
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-red-600 dark:text-dark-600 hover:underline">Home</a>
          </li>
          <li>
            <a href="#about" className="text-gray-900 dark:text-gray-300 hover:underline">Features</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-900 dark:text-gray-300 hover:underline">Pricing</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-900 dark:text-gray-300 hover:underline">Contact</a>
          </li>
        </ul>
        <div>
            <button
            className="px-3 py-2 rounded-md text-gray-800 dark:text-gray-200"
            >
            Log In
            </button>
            <button
            className="ml-2 px-5 py-2 rounded-md text-white dark:text-white bg-red-700 dark:bg-red-700"
            >
            Register
            </button>
            <button
            onClick={toggleDarkMode}
            className="ml-3 px-5 py-3 rounded-md text-gray-800 dark:text-gray-200"
            >
            {darkMode ? <IoSunny /> : <MdDarkMode />}
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
