
import React from 'react';

const MovieList = ({ movies }) => {
  if (movies.length === 0) return <p>No movies found</p>;

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>Rating: {movie.rating}</p>
          <p>Genre: {movie.genre}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
