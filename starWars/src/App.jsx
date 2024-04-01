import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StarshipsList from './components/StarshipsList';
import StarshipDetails from './components/StarshipDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StarshipsList />} />
        <Route path="/starship/:id" element={<StarshipDetails />} />
      </Routes>
    </Router>
  )
}

export default App