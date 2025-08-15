// EmberFramework.js - Ember Framework Details Page
import React from 'react';
import { Link } from 'react-router-dom';
import emberLogo from '../images/e-circle-icon-4c.png';
import './FrameworkPages.css';

const EmberFramework = () => {
  const emberStats = {
    githubStars: '22k+',
    weeklyDownloads: '250k+',
    firstRelease: '2011',
    currentVersion: '5.5.0',
    maintainer: 'Ember Core Team',
    license: 'MIT',
    bundleSize: '95 KB',
    popularity: 45
  };

  const pros = [
    'Convention over configuration',
    'Mature and stable ecosystem',
    'Excellent routing capabilities',
    'Built-in testing framework',
    'Strong CLI with code generation',
    'Opinionated architecture reduces decisions',
    'Excellent addon ecosystem',
    'Great for large-scale applications'
  ];

  const cons = [
    'Steep learning curve',
    'Smaller community compared to React/Angular',
    'Less job market demand',
    'Can feel heavy for simple applications',
    'More rigid structure',
    'Fewer resources and tutorials available'
  ];

  const currentTrends = [
    { trend: 'Ember Octane', description: 'Modern Ember with tracked properties and modular components' },
    { trend: 'TypeScript Support', description: 'First-class TypeScript integration for better development experience' },
    { trend: 'Glimmer Components', description: 'Lightweight, fast rendering components with improved performance' },
    { trend: 'Ember Data Evolution', description: 'Enhanced data layer with better relationships and caching' }
  ];

  return (
    <div className="framework-page">
      {/* Hero Section */}
      <section className="framework-hero ember-theme">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <div className="framework-logo-large">
              <img src={emberLogo} alt="Ember logo" width={120} height={120} />
            </div>
            <h1 className="framework-title">Ember.js</h1>
            <p className="framework-tagline">A framework for ambitious web developers</p>
            <div className="hero-stats-grid">
              <div className="stat-item">
                <span className="stat-number">{emberStats.githubStars}</span>
                <span className="stat-label">GitHub Stars</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{emberStats.weeklyDownloads}</span>
                <span className="stat-label">Weekly Downloads</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{emberStats.popularity}%</span>
                <span className="stat-label">Developer Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="framework-nav">
        <div className="container">
          <div className="nav-links">
            <Link to="/" className="nav-link">← Back to Comparison</Link>
            <div className="framework-links">
              <Link to="/react" className="nav-link">React</Link>
              <Link to="/angular" className="nav-link">Angular</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="framework-content">
        <div className="container">
          {/* History Section */}
          <section className="content-section">
            <h2 className="section-title">History & Evolution</h2>
            <div className="history-timeline">
              <div className="timeline-item">
                <div className="timeline-year">2011</div>
                <div className="timeline-content">
                  <h3>SproutCore 2.0</h3>
                  <p>Originally started as SproutCore 2.0 by Yehuda Katz, focused on ambitious web applications.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2013</div>
                <div className="timeline-content">
                  <h3>Ember CLI Launch</h3>
                  <p>Introduction of Ember CLI, revolutionizing the development workflow with powerful tooling.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2018</div>
                <div className="timeline-content">
                  <h3>Ember 3.0 & Stability</h3>
                  <p>Major release focusing on stability and removing deprecated features, establishing modern Ember.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2019</div>
                <div className="timeline-content">
                  <h3>Ember Octane</h3>
                  <p>Complete modernization with tracked properties, modular components, and improved performance.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-content">
                  <h3>Modern Ember</h3>
                  <p>Continued evolution with 22k+ GitHub stars and strong enterprise adoption.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Current Data Section */}
          <section className="content-section">
            <h2 className="section-title">2025 Statistics & Data</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Technical Specs</h3>
                <ul className="spec-list">
                  <li><strong>Current Version:</strong> {emberStats.currentVersion}</li>
                  <li><strong>Bundle Size:</strong> {emberStats.bundleSize}</li>
                  <li><strong>License:</strong> {emberStats.license}</li>
                  <li><strong>Maintainer:</strong> {emberStats.maintainer}</li>
                  <li><strong>First Release:</strong> {emberStats.firstRelease}</li>
                </ul>
              </div>
              <div className="stat-card">
                <h3>Market Position</h3>
                <div className="market-stats">
                  <div className="market-item">
                    <span className="market-label">Stack Overflow Survey 2025</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '45%'}}></div>
                    </div>
                    <span className="market-value">45% Satisfaction</span>
                  </div>
                  <div className="market-item">
                    <span className="market-label">Enterprise Adoption</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '35%'}}></div>
                    </div>
                    <span className="market-value">35% Enterprise Use</span>
                  </div>
                  <div className="market-item">
                    <span className="market-label">Job Market Demand</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '25%'}}></div>
                    </div>
                    <span className="market-value">25% Market Share</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pros and Cons */}
          <section className="content-section">
            <h2 className="section-title">Pros & Cons Analysis</h2>
            <div className="pros-cons-grid">
              <div className="pros-section">
                <h3 className="pros-title">✅ Advantages</h3>
                <ul className="pros-list">
                  {pros.map((pro, index) => (
                    <li key={index} className="pro-item">{pro}</li>
                  ))}
                </ul>
              </div>
              <div className="cons-section">
                <h3 className="cons-title">⚠️ Challenges</h3>
                <ul className="cons-list">
                  {cons.map((con, index) => (
                    <li key={index} className="con-item">{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Current Trends */}
          <section className="content-section">
            <h2 className="section-title">2025 Trends & Future</h2>
            <div className="trends-grid">
              {currentTrends.map((trend, index) => (
                <div key={index} className="trend-card">
                  <h3 className="trend-title">{trend.trend}</h3>
                  <p className="trend-description">{trend.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EmberFramework;
