// Home.js - Accessible Framework Comparison Overview by Edison Gamba
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Import logo images
import reactLogo from '../images/icons8-react.svg';
import angularLogo from '../images/icons8-angular-96.png';
import emberLogo from '../images/e-circle-icon-4c.png';

const Home = () => {
  const frameworks = [
    {
      name: 'React',
      logo: reactLogo,
      bgColor: 'react-theme',
      description: 'A JavaScript library for building user interfaces with component-based architecture',
      popularity: 87,
      stars: '220k+',
      downloads: '20M+',
      path: '/react',
      yearCreated: 2013,
      maintainer: 'Meta (Facebook)'
    },
    {
      name: 'Angular',
      logo: angularLogo,
      bgColor: 'angular-theme',
      description: 'Full-featured platform for building mobile and desktop web applications',
      popularity: 72,
      stars: '93k+',
      downloads: '3M+',
      path: '/angular',
      yearCreated: 2016,
      maintainer: 'Google'
    },
    {
      name: 'Ember.js',
      logo: emberLogo,
      bgColor: 'ember-theme',
      description: 'Framework for creating ambitious web applications with conventions',
      popularity: 45,
      stars: '22k+',
      downloads: '150K+',
      path: '/ember',
      yearCreated: 2011,
      maintainer: 'Ember Core Team'
    }
  ];

  const comparisonMetrics = [
    { name: 'React', learning: 70, performance: 85, community: 95, jobs: 90 },
    { name: 'Angular', learning: 90, performance: 75, community: 80, jobs: 75 },
    { name: 'Ember', learning: 85, performance: 70, community: 60, jobs: 40 }
  ];

  return (
    <div className="home-page">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Hero Section */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title">
              <span className="hero-title-main">JavaScript Framework</span>
              <span className="hero-title-accent">Comparison Hub</span>
            </h1>
            <p className="hero-description">
              Compare the most popular JavaScript frameworks and make informed decisions for your next project.
              Comprehensive analysis with real-world statistics and expert insights.
            </p>
            <div className="hero-stats">
              <div className="stat-badge">
                <span className="stat-number">3</span>
                <span className="stat-label">Major Frameworks</span>
              </div>
              <div className="stat-badge">
                <span className="stat-number">A11Y</span>
                <span className="stat-label">WCAG Compliant</span>
              </div>
              <div className="stat-badge">
                <span className="stat-number">2024</span>
                <span className="stat-label">Updated Data</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content">
        {/* Framework Grid Section */}
        <section className="frameworks-section py-20" aria-labelledby="frameworks-title">
          <div className="container">
            <h2 id="frameworks-title" className="section-title">
              Choose Your Framework
            </h2>
            <p className="section-description">
              Explore detailed comparisons of the most popular JavaScript frameworks
            </p>
            
            <div className="frameworks-grid">
              {frameworks.map((framework, index) => (
                <article 
                  key={framework.name}
                  className={`framework-card ${framework.bgColor}`}
                >
                  <Link 
                    to={framework.path}
                    className="framework-link"
                    aria-label={`Learn more about ${framework.name}`}
                  >
                    <div className="framework-header">
                      <div className="framework-logo">
                        <img 
                          src={framework.logo}
                          alt={`${framework.name} logo`}
                          width={64}
                          height={64}
                          className="logo-icon"
                        />
                      </div>
                      <h3 className="framework-name">{framework.name}</h3>
                    </div>
                    
                    <p className="framework-description">
                      {framework.description}
                    </p>
                    
                    <div className="framework-stats">
                      <div className="stat-row">
                        <span className="stat-label">Popularity:</span>
                        <span className="stat-value">{framework.popularity}%</span>
                      </div>
                      <div className="stat-row">
                        <span className="stat-label">GitHub Stars:</span>
                        <span className="stat-value">{framework.stars}</span>
                      </div>
                      <div className="stat-row">
                        <span className="stat-label">Weekly Downloads:</span>
                        <span className="stat-value">{framework.downloads}</span>
                      </div>
                      <div className="stat-row">
                        <span className="stat-label">Created:</span>
                        <span className="stat-value">{framework.yearCreated}</span>
                      </div>
                    </div>
                    
                    <div className="framework-cta">
                      <span className="cta-text">Explore {framework.name}</span>
                      <svg className="cta-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                      </svg>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Metrics Section */}
        <section className="metrics-section py-20" aria-labelledby="metrics-title">
          <div className="container">
            <h2 id="metrics-title" className="section-title">
              Quick Comparison
            </h2>
            <p className="section-description">
              Compare key metrics across all frameworks at a glance
            </p>
            
            <div className="metrics-grid">
              {comparisonMetrics.map((metric, index) => (
                <div key={metric.name} className="metric-card">
                  <h3 className="metric-framework">{metric.name}</h3>
                  
                  <div className="metric-bars">
                    <div className="metric-item">
                      <div className="metric-header">
                        <span className="metric-label">Learning Curve</span>
                        <span className="metric-percentage">{metric.learning}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill learning"
                          style={{ width: `${metric.learning}%` }}
                          role="progressbar"
                          aria-valuenow={metric.learning}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label={`Learning curve difficulty: ${metric.learning}%`}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="metric-item">
                      <div className="metric-header">
                        <span className="metric-label">Performance</span>
                        <span className="metric-percentage">{metric.performance}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill performance"
                          style={{ width: `${metric.performance}%` }}
                          role="progressbar"
                          aria-valuenow={metric.performance}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label={`Performance rating: ${metric.performance}%`}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="metric-item">
                      <div className="metric-header">
                        <span className="metric-label">Community</span>
                        <span className="metric-percentage">{metric.community}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill community"
                          style={{ width: `${metric.community}%` }}
                          role="progressbar"
                          aria-valuenow={metric.community}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label={`Community size: ${metric.community}%`}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="metric-item">
                      <div className="metric-header">
                        <span className="metric-label">Job Market</span>
                        <span className="metric-percentage">{metric.jobs}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill jobs"
                          style={{ width: `${metric.jobs}%` }}
                          role="progressbar"
                          aria-valuenow={metric.jobs}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label={`Job opportunities: ${metric.jobs}%`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
