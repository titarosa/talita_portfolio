// Portfolio.jsx
import React from 'react';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2>My Work</h2>
      <div className="portfolio-items">
        {/* Repeat this block for each project */}
        <div className="portfolio-item">
          <h3>Project Title</h3>
          <a href="link-to-deployed-app" target="_blank" rel="noopener noreferrer">Live App</a>
          <a href="link-to-github-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
