import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <div className="hover:text-gray-300">Products</div>
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <div className="hover:text-gray-300">Cart</div>
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          {/* Example of search bar */}
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Example of user profile icon */}
          <div className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a3 3 0 013 3v1a3 3 0 11-6 0V5a3 3 0 013-3zM7 10a3 3 0 113-3 3 3 0 01-3 3zm5 0a3 3 0 113-3 3 3 0 01-3 3zm-7 5a5 5 0 0110 0H5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* Login button */}
          <Link href="/login">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-all duration-300 shadow-md transform hover:scale-105">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
