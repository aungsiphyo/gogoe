// src/components/CardGrid.jsx
import React from 'react';
import Card from './Card';
import { GiWeight } from "react-icons/gi";
import { IoTimerSharp } from "react-icons/io5";
import { FaBluetooth } from "react-icons/fa";
import { IoIosBatteryCharging } from "react-icons/io";

const CardGrid = () => {
  const cards = [
    {
      title: 'Light Weight',
      description: 'Total Weight - 2 Kilo',
      imageUrl: <GiWeight />,
      color: 'text-7xl text-blue-900 ',
    },
    {
      title: 'Long Time Usage',
      description: 'At least 30 Minutes',
      imageUrl: <IoTimerSharp />,
      color: 'text-7xl text-red-900',
    },
    {
      title: 'Bluetooth Control',
      description: 'Can Control with Bluetooth RC Controller',
      imageUrl: <FaBluetooth />,
      color: 'text-6xl text-blue-900 mt-3',
    },
    {
      title: 'Easy Charging',
      description: 'Charge easily with USE-3.0',
      imageUrl: <IoIosBatteryCharging />,
      color: 'text-7xl text-green-900',
    },
    // Add more card objects as needed
  ];

  return (
    <div className="container mx-auto p-6">
    <div className='flex flex-col items-center justify-center text-5xl dark:text-white text-center mb-16 relative'>Features</div>
    {/* after:content-[""] after:w-36 after:h-1 after:bg-red-800 after:absolute after:bottom-[-15px] after:left-0 after:inline-block after:px-auto after:mx-auto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
