import React, { useState } from 'react';
import { BsSearch, BsCart3 } from 'react-icons/bs';
import { SlHeart } from 'react-icons/sl';
import { VscAccount } from 'react-icons/vsc';

export default function NavBar() {
  return (
    <header className="header-upper py-1">
      <div className="container-xxl">

        <nav className="navbar navbar-expand-sm bg-blue navbar-dark">
          <a className="navbar-brand" href="#">
            <img src="./logo.png" alt="" width="90" height="60" className="d-inline-block align-text-top ms-3 mb-2 me-3"/>
          </a>
          <a className="justify-content-end ms-5 left-icons"><SlHeart/></a>
          <a className="justify-content-end left-icons"><VscAccount/></a>

          <a className="justify-content-end left-icons shopping-cart px-0"><BsCart3/></a>

          <ProductSearch/>
          <a className="d-none d-sm-block right-icons mx-3"><SlHeart /></a>
          <a className="d-none d-sm-block navbar-text text-white mb-0">View Wishlist</a>
          <a className="d-none d-sm-block right-icons mx-3"><VscAccount/></a>
          <a className="d-none d-sm-block navbar-text text-white mb-0">Log In<br/>My Account</a>
          <a className="d-none d-sm-block right-icons shopping-cart mx-3"><BsCart3/></a>
          <div className="d-flex flex-column mt-3">
            <span className="d-none d-sm-block badge bg-white text-dark text-center">0</span>
            <p className="d-none d-sm-block text-white cart-value">$500</p>
          </div>
        </nav>

      </div>
    </header>

  );
}

function ProductSearch() {
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(event) {
    event.preventDefault();

    fetch('/api/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearchResults(data);
        // eslint-disable-next-line
        console.log(searchResults);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }

  return (
    <form onSubmit={handleSearch} className="d-flex w-100">
      <div className="input-group flex-grow-1">
        <input type="text" name="searchTerm" className="form-control ms-3 border-end-0" placeholder="Search products" />
        <a type="submit" onClick={handleSearch} className="input-group-text me-3 search-button"><BsSearch/></a>
      </div>
    </form>
  );

}
