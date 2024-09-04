// src/components/TwoColumnLayout.jsx
import React from 'react';
import BotImg from '../assets/img/bot.jpg';

const TwoColumnLayout = () => {
  return (
    <section className="container mx-auto p-6 lg:px-24" id='home'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24">
        <div className="p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Hello, welcome guys!<br />
            Our Project, GO GOE Grass Cutting Robot that developed by ERROR 11 is about to come you. GO GOE is convenient, easy to use, and can save your time. For cleaning your environment, collaborate with our Team.
          </p>
          <a href="#contact"
            className="mt-5 px-5 py-3 rounded-md text-white dark:text-white bg-red-700 dark:bg-red-700"
            >
            Contact Us
        </a>
        </div>
        <div className="p-6 rounded-lg overflow-hidden">
          <img src={BotImg} alt="" width="600px" />
        </div>
      </div>
    </section>
  );
};

export default TwoColumnLayout;