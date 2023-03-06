import React from 'react';

export default function SearchSuggestions({ setSubmitted, onSearch, suggestions }) {
  async function handleSearch(event, productName) {
    try {
      event.preventDefault();
      const response = await fetch('/api/products');
      const data = await response.json();
      const matchingResults = data.filter((product) =>
        product.name.toLowerCase().includes(productName.toLowerCase()) ||
        product.category.toLowerCase().includes(productName.toLowerCase())
      );
      onSearch(matchingResults);
      setSubmitted(true);
    } catch (err) { console.error('Error fetching data:', err); }
  }

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
