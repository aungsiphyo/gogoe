// src/components/MeasurementInput.jsx
import React, { useState } from 'react';

const CuttingMeasurement = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleStart = () => {
    // Add functionality for the "Start" button
    alert(`Width: ${width} feet, Height: ${height} feet`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Enter Feet for Cutting</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="width" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Width (feet)
            </label>
            <input
              type="number"
              id="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 text-black dark:text-gray-200"
              placeholder="Enter width"
              min="0"
              step="any"
            />
          </div>
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Height (feet)
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm text-black dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              placeholder="Enter height"
              min="0"
              step="any"
            />
          </div>
          <button
            onClick={handleStart}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default CuttingMeasurement;
