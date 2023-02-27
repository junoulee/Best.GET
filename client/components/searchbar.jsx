import React from 'react';
import { BsSearch } from 'react-icons/bs';

export function SearchBar({ handleSearch, handleInputChange }) {
  return (
    <form onSubmit={handleSearch} className="d-flex w-100">
      <div className="input-group flex-grow-1">
        <input type="text" name="inputField" className="form-control ms-3 border-end-0" onChange={handleInputChange} placeholder="Search products" />
        <button type="submit" className="input-group-text me-3 search-button"><BsSearch /></button >
      </div>
    </form>
  );
}
