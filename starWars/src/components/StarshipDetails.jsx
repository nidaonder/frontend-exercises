// StarshipDetails.js
import React, { useState, useEffect } from 'react';
import { fetchStarshipDetails } from '../api/starwarsapi';

const StarshipDetails = ({ match }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchStarshipDetails(match.params.id);
      setDetails(result);
    };
    fetchData();
  }, [match.params.id]);

  if (!details) return <div>Loading...</div>;

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Model: {details.model}</p>
      <p>Manufacturer: {details.manufacturer}</p>
      // Diğer detaylar buraya eklenebilir
    </div>
  );
};

export default StarshipDetails;