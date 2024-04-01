// StarshipsList.js
import React, { useState, useEffect } from 'react';
import { fetchStarships, searchStarships } from '../api/starwarsapi';

const StarshipsList = () => {
  const [starships, setStarships] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchStarships();
      setStarships(result.results);
    };
    fetchData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const result = await searchStarships(search);
    setStarships(result.results);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search starships" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {starships.map((ship) => (
          <li key={ship.name}>{ship.name} - {ship.model}</li>
        ))}
      </ul>
    </div>
  );
};

export default StarshipsList;