import React, { useState, useEffect } from 'react';
import { SearchBar } from '../components/searchbar';

export function ProductSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  async function handleSearch(event) {
    try {
      event.preventDefault();
      const response = await fetch('/api/products');
      const data = await response.json();
      const matchingResults = data.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(matchingResults);
      // eslint-disable-next-line
      console.log(searchResults, searchTerm, matchingResults);
    } catch (err) { console.error('Error fetching data:', err); }
  }

  useEffect(() => {
    async function fetchSuggestions() {
      const response = await fetch(`/api/products?search=${searchTerm}`);
      const data = await response.json();
      setSuggestions(data);
    }
    fetchSuggestions();
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

  return (
    <>
      <SearchBar handleSearch={handleSearch} handleInputChange={handleInputChange}/>
      {searchTerm && (
        <div className="search-dropdown">
          {suggestions.map((value) =>
            <a key={value.productId} href="" className="search-suggestions">{value.name}</a>
          )}
        </div>
      )}
    </>
  );
}
