// Navbar.js - Accessible Framework Comparison Navigation by Edison Gamba
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home', color: 'blue' },
    { path: '/react', label: 'React', color: 'react' },
    { path: '/angular', label: 'Angular', color: 'angular' },
    { path: '/ember', label: 'Ember', color: 'ember' }
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link 
            to="/" 
            className="logo"
            onClick={closeMenu}
          >
            <span className="logo-text">Framework Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu desktop-menu" role="menubar">
            {navItems.map((item) => (
              <li key={item.path} role="none">
                <Link 
                  to={item.path}
                  className={`nav-link ${item.color}-theme ${isActiveLink(item.path) ? 'active' : ''}`}
                  role="menuitem"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="mobile-menu-btn"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
          role="menu"
        >
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.path} role="none">
                <Link 
                  to={item.path}
                  className={`mobile-nav-link ${item.color}-theme ${isActiveLink(item.path) ? 'active' : ''}`}
                  role="menuitem"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-primary);
          backdrop-filter: blur(8px);
          z-index: 50;
          box-shadow: 0 2px 10px var(--shadow-color);
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
        }

        .logo {
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          transition: color 0.2s ease;
        }

        .logo:hover {
          color: var(--accent-blue);
        }

        .logo-text {
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-menu {
          display: none;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0.5rem;
        }

        @media (min-width: 768px) {
          .nav-menu {
            display: flex;
          }
        }

        .desktop-menu {
          align-items: center;
        }

        .nav-link {
          display: block;
          padding: 0.75rem 1rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.2s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: var(--bg-tertiary);
        }

        .nav-link.active {
          color: var(--primary-color, var(--accent-blue));
          background: var(--bg-tertiary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50%;
          height: 2px;
          background: var(--primary-color, var(--accent-blue));
          border-radius: 1px;
        }

        /* Framework-specific colors */
        .react-theme {
          --primary-color: var(--react-primary);
        }
        
        .angular-theme {
          --primary-color: var(--angular-primary);
        }
        
        .ember-theme {
          --primary-color: var(--ember-primary);
        }

        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          padding: 0.5rem;
          color: var(--text-secondary);
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none;
          }
        }

        .mobile-menu-btn:hover {
          color: var(--text-primary);
          background: var(--bg-tertiary);
        }

        .hamburger {
          width: 24px;
          height: 18px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: currentColor;
          border-radius: 1px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .mobile-menu {
          display: block;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-primary);
        }

        @media (min-width: 768px) {
          .mobile-menu {
            display: none;
          }
        }

        .mobile-menu.open {
          max-height: 300px;
          padding: 1rem 0;
        }

        .mobile-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mobile-nav-link {
          display: block;
          padding: 0.75rem 1rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
          border-left: 3px solid transparent;
        }

        .mobile-nav-link:hover {
          color: var(--text-primary);
          background: var(--bg-tertiary);
          border-left-color: var(--primary-color, var(--accent-blue));
        }

        .mobile-nav-link.active {
          color: var(--primary-color, var(--accent-blue));
          background: var(--bg-tertiary);
          border-left-color: var(--primary-color, var(--accent-blue));
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
