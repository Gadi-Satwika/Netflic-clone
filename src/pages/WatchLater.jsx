import React from 'react';
import { Link } from 'react-router-dom';
import { useWatchLater } from '../context/WatchLaterContext';
import MovieCard from '../components/MovieCard';
import './WatchLater.css';

const WatchLater = () => {
  const { watchLater } = useWatchLater();

  return (
    <div className="watch-later-page">
      <div className="watch-later-container">
        <h1 className="watch-later-title">Watch Later</h1>
        
        {watchLater.length > 0 ? (
          <div className="watch-later-grid">
            {watchLater.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="watch-later-empty-state">
            <p className="watch-later-empty-msg">Your Watch Later list is empty.</p>
            <Link to="/" className="browse-movies-link">
              Browse Movies
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchLater;
