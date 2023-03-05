import React from 'react';

export default function SearchSuggestions({ suggestions, handleSearch }) {
  return (
    <>
      <div className="search-dropdown">
        {suggestions.map((value) =>
          <a key={value.productId}
            href=""
            onClick={(event) => {
              handleSearch(event, value.name);
            }}
            className="search-suggestions">{value.name}</a>
        )}
      </div>
      <div className="overlay" />
    </>
  );
}
