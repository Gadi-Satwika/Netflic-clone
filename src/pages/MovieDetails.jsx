import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Star, ChevronLeft, Plus, Check } from 'lucide-react';
import movies from '../data/movies';
import { useWatchLater } from '../context/WatchLaterContext';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isInWatchLater, toggleWatchLater } = useWatchLater();

  const movie = movies.find(m => m.id === Number(id));

  // Spec: If the id does not match any movie, redirect to /not-found.
  if (!movie) {
    return <Navigate to="/not-found" replace />;
  }

  const isSaved = isInWatchLater(movie.id);

  const handleGoBack = () => {
    // Spec: Go Back button (navigate(-1))
    navigate(-1);
  };

  return (
    <div className="movie-details-page">
      {/* Backdrop Section */}
      <div 
        className="details-backdrop"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      >
        <div className="backdrop-overlay"></div>
      </div>

      {/* Content Container */}
      <div className="details-container">
        <button onClick={handleGoBack} className="back-nav-btn" aria-label="Go Back">
          <ChevronLeft size={20} />
          <span>Go Back</span>
        </button>

        <div className="details-content">
          {/* Left Column: Poster */}
          <div className="details-poster-wrapper">
            <img 
              src={movie.poster} 
              alt={movie.title} 
              className="details-poster-img"
            />
          </div>

          {/* Right Column: Info */}
          <div className="details-info-wrapper">
            <h1 className="details-title">{movie.title}</h1>
            
            <div className="details-meta-row">
              <span className="details-genre-tag">{movie.genre}</span>
              <span className="details-meta-item">{movie.year}</span>
              <span className="details-meta-item">{movie.duration}</span>
              
              <div className="details-rating-badge">
                <Star size={14} fill="var(--star)" color="var(--star)" />
                <span className="details-rating-val">{movie.rating}</span>
              </div>
            </div>

            <p className="details-overview">{movie.overview}</p>

            {/* Toggle Watch Later Button */}
            <button 
              onClick={() => toggleWatchLater(movie)}
              className={`watch-later-toggle-btn ${isSaved ? 'saved' : ''}`}
            >
              {isSaved ? (
                <>
                  <Check size={18} />
                  <span>✓ Added to Watch Later</span>
                </>
              ) : (
                <>
                  <Plus size={18} />
                  <span>+ Watch Later</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
