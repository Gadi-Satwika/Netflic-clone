import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-description">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="back-home-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
