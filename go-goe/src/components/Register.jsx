import BotImg from '../assets/img/bot.png';
import React, { useState } from 'react';

const RegisterPage = () => {

  return (
    <div className={`flex min-h-screen transition-colors duration-300 mt-16 md:mt-5`}>
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row">
        <div className="sm:hidden md:block md:w-1/2">
          <img src={BotImg} alt="Register" className="w-full object-cover" />
        </div>
        <div className="md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md">
            <h2 className={`text-2xl font-bold mb-6`}>Sign Up</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className={`block w-full p-3 rounded-md border`}
              />
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
