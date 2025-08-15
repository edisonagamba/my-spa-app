// ReactFramework.js - React Framework Details Page
import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../images/icons8-react.svg';
import './ReactFramework.css';

const ReactFramework = () => {
  const reactStats = {
    githubStars: '220k+',
    weeklyDownloads: '20M+',
    firstRelease: '2013',
    currentVersion: '18.2.0',
    maintainer: 'Meta (Facebook)',
    license: 'MIT',
    bundleSize: '42.2 KB',
    popularity: 87
  };

  const pros = [
    'Virtual DOM for optimal performance',
    'Large ecosystem and community',
    'Component-based architecture',
    'Strong developer tools',
    'Excellent documentation',
    'Backed by Meta (Facebook)',
    'Great for single-page applications',
    'Extensive third-party libraries'
  ];

  const cons = [
    'Steep learning curve for beginners',
    'Rapid ecosystem changes',
    'JSX syntax can be confusing initially',
    'Requires additional libraries for full functionality',
    'SEO challenges without SSR',
    'Complex state management in large apps'
  ];

  const currentTrends = [
    { trend: 'Server Components', description: 'Revolutionary way to build React apps with server-side rendering' },
    { trend: 'Concurrent Features', description: 'Better user experience with non-blocking rendering' },
    { trend: 'React 19', description: 'Upcoming release with new compiler and performance improvements' },
    { trend: 'Next.js Integration', description: 'Seamless full-stack development with App Router' }
  ];

  return (
    <div className="framework-page">
      {/* Hero Section */}
      <section className="framework-hero react-theme">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <div className="framework-logo-large">
              <img src={reactLogo} alt="React logo" width={120} height={120} />
            </div>
            <h1 className="framework-title">React</h1>
            <p className="framework-tagline">A JavaScript library for building user interfaces</p>
            <div className="hero-stats-grid">
              <div className="stat-item">
                <span className="stat-number">{reactStats.githubStars}</span>
                <span className="stat-label">GitHub Stars</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{reactStats.weeklyDownloads}</span>
                <span className="stat-label">Weekly Downloads</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{reactStats.popularity}%</span>
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
              <Link to="/angular" className="nav-link">Angular</Link>
              <Link to="/ember" className="nav-link">Ember</Link>
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
                <div className="timeline-year">2013</div>
                <div className="timeline-content">
                  <h3>Birth of React</h3>
                  <p>Created by Jordan Walke at Facebook. Initially used for Facebook's newsfeed and later for Instagram.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2015</div>
                <div className="timeline-content">
                  <h3>React Native</h3>
                  <p>Facebook released React Native, enabling mobile app development with React principles.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2018</div>
                <div className="timeline-content">
                  <h3>Hooks Revolution</h3>
                  <p>React Hooks introduced, fundamentally changing how developers write React components.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2022</div>
                <div className="timeline-content">
                  <h3>React 18</h3>
                  <p>Concurrent features, automatic batching, and new Suspense capabilities released.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-content">
                  <h3>Current State</h3>
                  <p>Most popular frontend library with over 220k GitHub stars and 20M+ weekly downloads.</p>
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
                  <li><strong>Current Version:</strong> {reactStats.currentVersion}</li>
                  <li><strong>Bundle Size:</strong> {reactStats.bundleSize}</li>
                  <li><strong>License:</strong> {reactStats.license}</li>
                  <li><strong>Maintainer:</strong> {reactStats.maintainer}</li>
                  <li><strong>First Release:</strong> {reactStats.firstRelease}</li>
                </ul>
              </div>
              <div className="stat-card">
                <h3>Market Position</h3>
                <div className="market-stats">
                  <div className="market-item">
                    <span className="market-label">Stack Overflow Survey 2025</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '87%'}}></div>
                    </div>
                    <span className="market-value">87% Satisfaction</span>
                  </div>
                  <div className="market-item">
                    <span className="market-label">GitHub Usage</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '92%'}}></div>
                    </div>
                    <span className="market-value">92% of Top Repos</span>
                  </div>
                  <div className="market-item">
                    <span className="market-label">Job Market Demand</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '90%'}}></div>
                    </div>
                    <span className="market-value">90% High Demand</span>
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

export default ReactFramework;
