// AngularFramework.js - Angular Framework Details Page
import React from 'react';
import { Link } from 'react-router-dom';
import angularLogo from '../images/angular.svg';
import './FrameworkPages.css';

const AngularFramework = () => {
  const angularStats = {
    githubStars: '93k+',
    weeklyDownloads: '3M+',
    firstRelease: '2016',
    currentVersion: '17.0.0',
    maintainer: 'Google',
    license: 'MIT',
    bundleSize: '130 KB',
    popularity: 72
  };

  const pros = [
    'Full-featured framework out of the box',
    'TypeScript by default',
    'Powerful CLI tools',
    'Enterprise-ready architecture',
    'Comprehensive testing utilities',
    'Strong opinionated structure',
    'Excellent for large-scale applications',
    'Built-in dependency injection'
  ];

  const cons = [
    'Steep learning curve',
    'Heavy framework with large bundle size',
    'Complex for simple applications',
    'Frequent major version updates',
    'Verbose syntax compared to other frameworks',
    'Can be overkill for small projects'
  ];

  const currentTrends = [
    { trend: 'Standalone Components', description: 'Simplified component architecture without NgModules' },
    { trend: 'Angular Signals', description: 'New reactivity model for better performance and developer experience' },
    { trend: 'Angular Universal', description: 'Enhanced server-side rendering capabilities' },
    { trend: 'Angular Elements', description: 'Create custom elements that work in any web application' }
  ];

  return (
    <div className="framework-page">
      {/* Hero Section */}
      <section className="framework-hero angular-theme">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <div className="framework-logo-large">
              <img src={angularLogo} alt="Angular logo" width={120} height={120} />
            </div>
            <h1 className="framework-title">Angular</h1>
            <p className="framework-tagline">The web development platform for building the future</p>
            <div className="hero-stats-grid">
              <div className="stat-item">
                <span className="stat-number">{angularStats.githubStars}</span>
                <span className="stat-label">GitHub Stars</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{angularStats.weeklyDownloads}</span>
                <span className="stat-label">Weekly Downloads</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{angularStats.popularity}%</span>
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
                <div className="timeline-year">2010</div>
                <div className="timeline-content">
                  <h3>AngularJS Era</h3>
                  <p>AngularJS was created by Miško Hevery at Google, revolutionizing web development with two-way data binding.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2016</div>
                <div className="timeline-content">
                  <h3>Angular 2 Rewrite</h3>
                  <p>Complete rewrite in TypeScript, introducing component-based architecture and mobile-first approach.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h3>Angular Ivy</h3>
                  <p>New rendering engine providing smaller bundle sizes and improved tree-shaking.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <div className="timeline-content">
                  <h3>Standalone Components</h3>
                  <p>Introduction of standalone components, simplifying Angular's architecture.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-content">
                  <h3>Modern Angular</h3>
                  <p>Angular Signals and improved developer experience with 93k+ GitHub stars.</p>
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
                  <li><strong>Current Version:</strong> {angularStats.currentVersion}</li>
                  <li><strong>Bundle Size:</strong> {angularStats.bundleSize}</li>
                  <li><strong>License:</strong> {angularStats.license}</li>
                  <li><strong>Maintainer:</strong> {angularStats.maintainer}</li>
                  <li><strong>First Release:</strong> {angularStats.firstRelease}</li>
                </ul>
              </div>
              <div className="stat-card">
                <h3>Market Position</h3>
                <div className="market-stats">
                  <div className="market-item">
                    <span className="market-label">Stack Overflow Survey 2025</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '72%'}}></div>
                    </div>
                    <span className="market-value">72% Satisfaction</span>
                  </div>
                  <div className="market-item">
                    <span className="market-label">Enterprise Adoption</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '85%'}}></div>
                    </div>
                    <span className="market-value">85% Enterprise Use</span>
                  </div>
                  <div className="market-item">
                    <span className="market-label">Job Market Demand</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '75%'}}></div>
                    </div>
                    <span className="market-value">75% High Demand</span>
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

export default AngularFramework;
