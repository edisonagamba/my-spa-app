// Navbar.js - Created by Edison Gamba with professional styling and Tailwind CSS
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-soft fixed w-full top-0 z-50 border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary-700 hover:text-primary-800 transition-colors duration-200"
          >
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              MySPA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link 
                to="/" 
                className={`font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                  isActiveLink('/') 
                    ? 'text-primary-700 bg-primary-50 border-b-2 border-primary-600' 
                    : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                  isActiveLink('/about') 
                    ? 'text-primary-700 bg-primary-50 border-b-2 border-primary-600' 
                    : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                  isActiveLink('/contact') 
                    ? 'text-primary-700 bg-primary-50 border-b-2 border-primary-600' 
                    : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Close icon */}
            <svg
              className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="space-y-1">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                isActiveLink('/') 
                  ? 'text-primary-700 bg-primary-50 border-l-4 border-primary-600' 
                  : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                isActiveLink('/about') 
                  ? 'text-primary-700 bg-primary-50 border-l-4 border-primary-600' 
                  : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                isActiveLink('/contact') 
                  ? 'text-primary-700 bg-primary-50 border-l-4 border-primary-600' 
                  : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
