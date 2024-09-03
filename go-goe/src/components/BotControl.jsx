// src/components/CarControl.jsx
import React from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import CuttingMeasurement from './CuttingMeasurement';

const BotControl = () => {

  return (
    <div className={`min-h-screen text-white transition-all duration-300 pt-16`} id='control'>
      <div className="container mx-auto p-4">
        <div className='flex flex-col items-center justify-center text-5xl text-black dark:text-white text-center mb-16 relative'>GO GOE Control</div>
            <div className="bluetooth flex items-center justify-around">
                <div className="remote flex items-start justify-center gap-20">
                    <div className="flex flex-col justify-center items-center w-auto">
                        <div className="relative my-14">
                            <button className="absolute top-[-60px] left-[60px] p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600` mb-2">
                            <FaArrowAltCircleUp />
                            </button>
                            <div className="flex">
                                <button className="p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 mr-2">
                                <FaArrowAltCircleLeft />
                                </button>
                                <button className="p-4 bg-none text-white rounded-full mb-2 w-16" disabled>
                                </button>
                                <button className="p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 ml-2">
                                <FaArrowAltCircleRight />
                                </button>
                                </div>
                                <button className="absolute buttom-[-60px] left-[60px] p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 mt-2">
                                <FaArrowAltCircleDown />
                                </button>
                            </div>
                            <button className="mt-10 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 w-32 mx-auto">
                                Stop
                            </button>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col mb-10">
                            <button className="p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600` mb-2">
                            Start Cutting
                            </button>
                            <button className="p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 mt-2">
                            Stop Cutting
                            </button>
                        </div>
                    </div>
                </div> 
                <CuttingMeasurement/>
            </div>
        </div>
    </div>
  );
};

export default BotControl;
