import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          CW Massage
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>
        <ul
          className={`md:flex gap-6 absolute md:static left-0 w-full bg-gray-900 md:bg-transparent transition-all duration-300 ease-in ${
            isOpen ? 'top-16' : 'top-[-300px]'
          } md:top-0 md:flex-row flex flex-col items-center md:items-start p-4 md:p-0`}
        >
          <li>
            <Link to="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
