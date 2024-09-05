// src/components/Card.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <section className="container mx-auto p-6 lg:px-24">
      <div className='flex flex-col items-center justify-center text-5xl dark:text-white text-center mb-16 relative'>Contact Us</div>
        <form
          action="#"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </form>
          <div className="p-4 max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Information</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              This is a responsive info component with Tailwind CSS. It supports both light and dark modes.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li className="text-gray-700 dark:text-gray-300">Responsive Design</li>
              <li className="text-gray-700 dark:text-gray-300">Light and Dark Mode Support</li>
              <li className="text-gray-700 dark:text-gray-300">Tailwind CSS Styling</li>
            </ul>
          </div>
    </section>
  );
};

export default ContactUs;