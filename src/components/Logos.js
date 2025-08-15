// Logo component for accessible SVG framework logos
import React from 'react';

export const ReactLogo = ({ size = 64, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
    role="img"
    aria-label="React logo"
  >
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-60 12 12)"/>
  </svg>
);

export const AngularLogo = ({ size = 64, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
    role="img"
    aria-label="Angular logo"
  >
    <path d="M12 2L2 5l2 14 8 1 8-1 2-14-10-3zm0 2.5l6.5 2.5-1.5 11.5-5 .5-5-.5L5.5 7 12 4.5z"/>
    <path d="M10 10h4l-2-3-2 3zm2 2l-1.5 3h3L12 12z"/>
  </svg>
);

export const EmberLogo = ({ size = 64, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
    role="img"
    aria-label="Ember.js logo"
  >
    <path d="M12 2c-1.1 0-2 .9-2 2 0 .6.3 1.1.7 1.4-.1.2-.2.5-.2.8 0 1.1.9 2 2 2h.5c.8 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.5-1.1.3-.3.5-.8.5-1.3 0-1.1-.9-2-2-2z"/>
    <path d="M8 10c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.1-.5 2.1-1.2 2.8L16 22H8l1.2-9.2C8.5 12.1 8 11.1 8 10z"/>
    <path d="M10 14h4l-.5 4h-3L10 14z" fill="currentColor" opacity="0.7"/>
  </svg>
);

const LogoComponents = {
  ReactLogo,
  AngularLogo,
  EmberLogo
};

export default LogoComponents;
