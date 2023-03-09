import React, { useState, useEffect } from 'react';
import { SearchBar } from '../components/searchbar';
import SearchSuggestions from '../components/search-suggestions';
import { useNavigate } from 'react-router-dom';

export function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    navigate(`/search?term=${searchTerm}`);
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
        <SearchSuggestions setSubmitted={setSubmitted} suggestions={suggestions} />
      )}
    </>
  );
}
