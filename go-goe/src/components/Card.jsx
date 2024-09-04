// src/components/Card.jsx
import React from 'react';

const Card = ({ title, description, imageUrl, color }) => {
  return (
    <div className="bg-white fill shadow-lg rounded-lg overflow-hidden flex flex-col justify-center items-center">
        <div className="icon p-auto h-18 my-5">
            <div className={color}>{imageUrl}</div>
        </div>
      {/* <img src={imageUrl} alt={title} className="w-full h-48 object-cover" /> */}
      <div className="p-4 mx-auto h-28 flex flex-col justify-start items-center">
        <h3 className="text-xl font-bold mb-2 text-center text-red-700">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
