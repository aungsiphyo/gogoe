import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = ({ title, price, priceOnly, features, isHighlighted }) => {
  return (
    <div className={`border rounded-lg p-6 shadow-lg ${isHighlighted ? 'border-red-700' : 'border-gray-300'} bg-white dark:bg-gray-800 dark:border-gray-700`}>
      <h2 className={`text-2xl font-bold mb-4 ${isHighlighted ? 'text-red-700' : 'text-gray-900 dark:text-gray-100'}`}>{title}</h2>
      <p className={`text-4xl font-bold mb-4 ${isHighlighted ? 'text-red-700' : 'text-gray-900 dark:text-gray-100'}`}>{price}</p>
      <ul className="list-disc list-inside mb-4">
        {features.map((feature, index) => (
          <li key={index} className={`mb-2 ${isHighlighted ? 'text-red-700' : 'text-gray-700 dark:text-gray-400'}`}>{feature}</li>
        ))}
      </ul>
      <Link to={`/payment/${priceOnly}`} className={`w-full py-2 px-4 rounded-md text-white ${isHighlighted ? 'bg-red-700 hover:bg-red-600' : 'bg-gray-900 hover:bg-gray-800'} dark:bg-gray-600 dark:hover:bg-gray-500`}>
        Choose Plan
      </Link>
    </div>
  );
};

export default PricingCard;
