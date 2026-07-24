import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Play } from 'lucide-react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div 
      className="movie-card" 
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <div className="poster-container">
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="movie-poster"
          loading="lazy"
        />
        <div className="rating-badge">
          <Star className="star-icon" size={12} fill="var(--star)" color="var(--star)" />
          <span className="rating-text">{movie.rating}</span>
        </div>
        <div className="play-overlay">
          <div className="play-circle">
            <Play className="play-icon" size={24} fill="#ffffff" color="#ffffff" />
          </div>
        </div>
      </div>
      <div className="movie-meta-info">
        <h4 className="movie-card-title">{movie.title}</h4>
        <div className="movie-card-metadata">
          <span>{movie.genre}</span>
          <span className="dot-divider">•</span>
          <span>{movie.year}</span>
          <span className="dot-divider">•</span>
          <span>{movie.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
