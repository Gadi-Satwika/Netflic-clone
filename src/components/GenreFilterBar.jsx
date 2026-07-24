import React from 'react';
import './GenreFilterBar.css';

const GenreFilterBar = ({ genres = [], selectedGenre = 'All', onSelectGenre }) => {
  const filterList = ['All', ...genres];

  return (
    <div className="genre-filter-section">
      <div className="genre-filter-container">
        {filterList.map((genre) => (
          <button
            key={genre}
            onClick={() => onSelectGenre(genre)}
            className={`genre-chip ${selectedGenre === genre ? 'active' : ''}`}
            type="button"
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilterBar;
