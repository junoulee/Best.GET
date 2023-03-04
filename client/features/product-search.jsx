import React, { useState, useEffect } from 'react';
import { SearchBar } from '../components/searchbar';

// Move searchResults to Home
// Accept prop named "onSearch"
// When search results are fetched, pass them to onSearch(searchResults)
export function ProductSearch({ onSearch }) {
  // const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  // const [noResult, setNoResult] = useState(false);

  async function handleSearch(event) {
    try {
      event.preventDefault();
      const response = await fetch('/api/products');
      const data = await response.json();
      const matchingResults = data.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      onSearch(matchingResults);
      // if (matchingResults.length === 0) {
      //   setNoResult(true);
      // }

    } catch (err) { console.error('Error fetching data:', err); }
  }

  useEffect(() => {
    async function fetchSuggestions() {
      const response = await fetch(`/api/products?search=${searchTerm}`);
      const data = await response.json();
      setSuggestions(data);
    }
    if (searchTerm) fetchSuggestions();
  }, [searchTerm]);

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
    const filterSuggestions = suggestions.filter((value) => {
      return value.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (event.target.value === '') {
      setSuggestions([]);
    } else {
      setSuggestions(filterSuggestions);
    }
  }
  function handleKeyPress(event) {
    const enterButton = event.type === 'keypress' && event.keyCode === 13;
    const clickButton = event.type === 'click';
    if (enterButton || clickButton) {
      setSubmitted(!submitted);
    }
    if (searchTerm === '') {
      setSubmitted(false);
    }
  }

  return (
    <>
      <SearchBar handleSearch={handleSearch} handleKeyPress={handleKeyPress} handleInputChange={handleInputChange} />
      {searchTerm && submitted === false && (
        <>
          <div className="search-dropdown">
            {suggestions.map((value) =>
              <a key={value.productId} href="" className="search-suggestions">{value.name}</a>
            )}
          </div>
          <div className="overlay" />
          </>
      )}
    </>
  );
}
