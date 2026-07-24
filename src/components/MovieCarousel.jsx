import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCarousel.css';

const MovieCarousel = ({ title, movies = [], direction = 'left' }) => {
  const navigate = useNavigate();

  // If there are no movies, do not render the carousel
  if (!movies || movies.length === 0) return null;

  // Ensure we have at least a solid set of items, up to 16
  const carouselMovies = movies.slice(0, 16);

  const handleItemClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="movie-carousel-section">
      <h3 className="carousel-heading">{title}</h3>
      <div className="carousel-viewport">
        <div className={`carousel-track direction-${direction}`}>
          {/* Render first set of items */}
          {carouselMovies.map((movie, idx) => (
            <div 
              key={`set1-${movie.id}-${idx}`}
              className="carousel-item"
              onClick={() => handleItemClick(movie.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleItemClick(movie.id);
                }
              }}
            >
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="carousel-poster"
                loading="lazy"
              />
              <div className="carousel-item-overlay">
                <div className="carousel-item-content">
                  <h4 className="carousel-item-title">{movie.title}</h4>
                  <p className="carousel-item-meta">
                    {movie.genre} <span className="carousel-dot-divider">•</span> ★ {movie.rating}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Render duplicate set of items for seamless infinite looping */}
          {carouselMovies.map((movie, idx) => (
            <div 
              key={`set2-${movie.id}-${idx}`}
              className="carousel-item"
              onClick={() => handleItemClick(movie.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleItemClick(movie.id);
                }
              }}
            >
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="carousel-poster"
                loading="lazy"
              />
              <div className="carousel-item-overlay">
                <div className="carousel-item-content">
                  <h4 className="carousel-item-title">{movie.title}</h4>
                  <p className="carousel-item-meta">
                    {movie.genre} <span className="carousel-dot-divider">•</span> ★ {movie.rating}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
