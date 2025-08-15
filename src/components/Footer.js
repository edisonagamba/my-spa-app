// Footer.js - Footer component with author information
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Footer Section */}
          <div className="footer-main">
            <div className="project-header">
              <h3 className="project-title">Framework Comparison Hub</h3>
              <p className="project-subtitle">Academic Project - JavaScript Framework Analysis</p>
            </div>

            <div className="course-info">
              <div className="course-details">
                <h4 className="course-name">Trends in Web Technology</h4>
                <div className="course-meta">
                  <span className="course-code">PROG8781</span>
                  <span className="divider">•</span>
                  <span className="semester">Spring 2025</span>
                  <span className="divider">•</span>
                  <span className="section">Section 3, Group 3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Authors Section */}
          <div className="authors-section">
            <div className="authors-container">
              <div className="author-card">
                <span className="author-name">Edison Gamba</span>
                <span className="author-id">ID: 8909383</span>
              </div>
              <div className="author-card">
                <span className="author-name">Harikumaran Durairaju</span>
                <span className="author-id">ID: 8995268</span>
              </div>
              <div className="author-card">
                <span className="author-name">Stephanie Osaje</span>
                <span className="author-id">ID: 8866909</span>
              </div>
              <div className="author-card">
                <span className="author-name">Al Shifan Sajida Beevi Hussain</span>
                <span className="author-id">ID: 8955409</span>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2025 Conestoga College. All rights reserved.
              </p>
              <div className="tech-info">
                <span className="tech-label">Built with:</span>
                <span className="tech-stack">React.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
