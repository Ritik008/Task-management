import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-lg font-semibold">
            Logo
          </Link>
        </div>
        <div className="hidden md:flex space-x-10">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/create" className="text-white hover:text-gray-300">
            Create
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "" : "hidden"}`}>
        <div className="flex flex-col items-center">
          <Link to="/" className="text-white hover:text-gray-300 py-2">
            Home
          </Link>
          <Link to="/create" className="text-white hover:text-gray-300 py-2">
            Create
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
