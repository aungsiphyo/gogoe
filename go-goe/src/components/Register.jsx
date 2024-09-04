import BotImage from '../assets/img/bot.webp'
import React, { useState } from 'react';

const RegisterPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>
      <button 
        onClick={handleToggleDarkMode} 
        className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
      >
        {darkMode ? '🌞' : '🌜'}
      </button>
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row">
        <div className="sm:hidden md:block md:w-1/2 h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800">
          <img src={BotImage} alt="Register" className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md">
            <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Sign Up</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className={`block w-full p-3 rounded-md border ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-300'}`}
              />
              <input 
                type="email" 
                placeholder="Email" 
                className={`block w-full p-3 rounded-md border ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-300'}`}
              />
              <input 
                type="password" 
                placeholder="Password" 
                className={`block w-full p-3 rounded-md border ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-300'}`}
              />
              <button 
                type="submit" 
                className={`w-full p-3 rounded-md text-white ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} hover:bg-blue-700`}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
