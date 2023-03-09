import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchSuggestions({ setSubmitted, suggestions }) {

  // async function handleSearch(event, productName) {
  //   try {
  //     event.preventDefault();
  //     const response = await fetch('/api/products');
  //     const data = await response.json();
  //     const matchingResults = data.filter((product) =>
  //       product.name.toLowerCase().includes(productName.toLowerCase()) ||
  //       product.category.toLowerCase().includes(productName.toLowerCase())
  //     );
  //     onSearch(matchingResults);
  //     setSubmitted(true);
  //   } catch (err) { console.error('Error fetching data:', err); }
  // }

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
