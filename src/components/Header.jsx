import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useWatchLater } from '../context/WatchLaterContext';
import './Header.css';

const Header = () => {
  const { watchLater } = useWatchLater();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Spec: Logout button removes jwt_token and redirects to /login
    Cookies.remove('jwt_token');
    navigate('/login', { replace: true });
  };

  const watchLaterCount = watchLater.length;

  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/" className="header-logo" aria-label="Nxtflix Home">
          NXTFLIX
        </Link>
        <nav className="header-nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/watch-later" 
            className={`nav-link watch-later-link ${location.pathname === '/watch-later' ? 'active' : ''}`}
          >
            Watch Later
            {watchLaterCount > 0 && (
              <span className="watch-later-badge">{watchLaterCount}</span>
            )}
          </Link>
          <button onClick={handleLogout} className="logout-button" aria-label="Logout">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
