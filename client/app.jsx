import React from 'react';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';

// import SearchResults from './pages/search-results';
// {/* <Route path="/search=" element={<SearchResults />} /> */}

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

  );
}
