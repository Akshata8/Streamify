
import axios from 'axios';

const API_URL = 'https://omdbapi.com/'; 
export const fetchMovies = async (searchParams) => {
  try {
    const response = await axios.get(API_URL, { params: searchParams });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movies.');
  }
};
