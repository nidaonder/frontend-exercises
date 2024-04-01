const BASE_URL = 'https://swapi.dev/api';

export const fetchStarships = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/starships/?page=${page}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const searchStarships = async (query) => {
  const response = await fetch(`${BASE_URL}/starships/?search=${query}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchStarshipDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/starships/${id}/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};