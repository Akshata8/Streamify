// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import Search from './Components/SearchBar';
import MovieList from './Components/MovieList';
import Loader from './Components/LoadingIndicator';
import Error from './Components/ErrorMessage';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (searchParams) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.example.com/movies', {
        params: searchParams,
      });
      setMovies(response.data);
    } catch (err) {
      setError('Failed to fetch movies.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIE APP</h1>
      </header>
      <Search onSearch={fetchMovies} />
      {loading && <Loader />}
      {error && <Error message={error} />}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
