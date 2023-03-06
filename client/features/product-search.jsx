import React, { useState, useEffect } from 'react';
import { SearchBar } from '../components/searchbar';
import SearchSuggestions from '../components/search-suggestions';

// Move searchResults to Home
// Accept prop named "onSearch"
// When search results are fetched, pass them to onSearch(searchResults)
export function ProductSearch({ onSearch }) {
  // const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  async function handleSearch(event, productName) {
    try {
      event.preventDefault();
      const response = await fetch('/api/products');
      const data = await response.json();
      const matchingResults = data.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      onSearch(matchingResults);
      setSubmitted(true);
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
    const filterSuggestions = suggestions.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (event.target.value === '') {
      setSuggestions([]);
    } else {
      setSuggestions(filterSuggestions);
    }
  }

  function handleKeyPress(event) {
    const enterButtonPressed = event.type === 'keypress' && event.keyCode === 13;
    const buttonClicked = event.type === 'click';

    if (enterButtonPressed || buttonClicked) {
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
        <SearchSuggestions setSubmitted={setSubmitted} onSearch={onSearch} suggestions={suggestions} />
      )}
    </>
  );
}
