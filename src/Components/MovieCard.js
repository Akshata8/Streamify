import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
      <img src={movie.posterUrl} alt={movie.title} />
    </div>
  );
};

export default MovieCard;
