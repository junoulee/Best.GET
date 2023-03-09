import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchSuggestions({ setSubmitted, suggestions }) {

  return (
    <>
      <div className="search-dropdown">
        {suggestions.map((value) =>
          <Link to={`/search?term=${value.name}`}
          key={value.productId}
          onClick={() => setSubmitted(true)}
          className="search-suggestions">{value.name}
          </Link>
        )}
      </div>
      <div className="overlay" />
    </>
  );
}
