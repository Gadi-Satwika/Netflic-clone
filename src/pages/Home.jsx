import React, { useState } from 'react';
import movies, { GENRES } from '../data/movies';
import MovieCarousel from '../components/MovieCarousel';
import GenreFilterBar from '../components/GenreFilterBar';
import MovieCard from '../components/MovieCard';
import './Home.css';

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');

  // Derived Lists
  // Spec: Trending Now - Sort all movies by Number(rating) descending → take first 16
  const trendingNow = [...movies]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 16);

  // Spec: Fresh Releases - Filter movies where year >= 2015 → take first 16
  const freshReleases = movies
    .filter(movie => movie.year >= 2015)
    .slice(0, 16);

  // Grid list filter
  // Spec: Filtering is an exact match on movie.genre (case-sensitive) or shows all when set to All
  const filteredMovies = selectedGenre === 'All'
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" aria-label="Hero Banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Discover your next favourite</h1>
          <p className="hero-subtitle">
            Browse {movies.length}+ titles across every genre. Add to Watch Later and pick anytime.
          </p>
        </div>
      </section>

      {/* Horizontal Carousels */}
      <MovieCarousel 
        title="Trending Now" 
        movies={trendingNow} 
        direction="left" 
      />
      <MovieCarousel 
        title="Fresh Releases" 
        movies={freshReleases} 
        direction="right" 
      />

      {/* Genre Filter Bar */}
      <GenreFilterBar 
        genres={GENRES} 
        selectedGenre={selectedGenre} 
        onSelectGenre={setSelectedGenre} 
      />

      {/* Movie Grid / List */}
      <section className="movie-grid-section">
        {filteredMovies.length > 0 ? (
          <div className="movie-grid">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty-grid-state">
            <p className="empty-grid-message">No movies found for this genre.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
