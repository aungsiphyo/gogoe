// src/LoginPage.js
import React, { useState } from 'react';
import BotImg from '../assets/img/bot.png';

const Login = () => {

  return (
    <div className={`flex min-h-screen transition-colors duration-300 mt-5`}>
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row">
        {/* Login Content */}
        <div className="md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md">
            <h2 className={`text-2xl font-bold mb-6`}>Log In</h2>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Email" 
                className={`block w-full p-3 rounded-md border`}
              />
              <input 
                type="password" 
                placeholder="Password" 
                className={`block w-full p-3 rounded-md border`}
              />
              <button 
                type="submit" 
                className={`w-full p-3 rounded-md text-white bg-blue-600 hover:bg-blue-700`}
              >
                Log In
              </button>
            </form>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img src={BotImg} alt="Login" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
