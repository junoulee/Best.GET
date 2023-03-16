import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

export function SearchBar({ handleSearch, handleInputChange, handleKeyPress }) {
  const [showCloseButton, setShowCloseButton] = useState(false);

  function toggleX(event) {
    if (event.target.value === '') {
      setShowCloseButton(false);
    } else {
      setShowCloseButton(true);
    }
  }

  return (
    <form onSubmit={handleSearch} className="d-flex w-100">
      <div className="input-group flex-grow-1">
        <input type="text"
        name="inputField"
        className="form-control ms-3 border-end-0"
        onKeyDown={(event) => {
          handleKeyPress(event);
          toggleX(event);
        }}
        onChange={handleInputChange}
        autoComplete="off"
        placeholder="Search products" />

        <div className="input-group-append">
          {showCloseButton && (
            <button
              className="btn btn-outline-secondary x-button"
              type="button"
              onClick={() => {
                handleInputChange({ target: { value: '' } });
                setShowCloseButton(false);
              }}>
              <AiOutlineClose />
            </button>)}
        </div>
        <button type="submit" onClick={handleKeyPress} className="input-group-text me-3 search-button"><BsSearch /></button>
      </div>
    </form>
  );
}
