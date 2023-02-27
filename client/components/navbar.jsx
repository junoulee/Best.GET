import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { SlHeart } from 'react-icons/sl';
import { VscAccount } from 'react-icons/vsc';
import { ProductSearch } from '../features/product-search';

export default function NavBar() {
  return (
    <header className="header-upper py-1">
      <div className="container-xxl">

        <nav className="navbar navbar-expand-md bg-blue navbar-dark">
          <a className="navbar-brand" href="#">
            <img src="./images/logo.png" alt="" width="90" height="60" className="d-inline-block align-text-top ms-3 mb-2 me-3"/>
          </a>
          <a className="justify-content-end ms-5 left-icons"><SlHeart/></a>
          <a className="justify-content-end left-icons"><VscAccount/></a>
          <a className="justify-content-end left-icons shopping-cart px-0"><BsCart3/></a>
          <ProductSearch/>
          <a className="d-none d-md-block right-icons mx-3"><SlHeart /></a>
          <a className="d-none d-md-block navbar-text text-white mb-0">View Wishlist</a>
          <a className="d-none d-md-block right-icons mx-3"><VscAccount/></a>
          <a className="d-none d-md-block navbar-text text-white mb-0">Log In<br/>My Account</a>
          <a className="d-none d-md-block right-icons shopping-cart mx-3"><BsCart3/></a>
          <div className="d-flex flex-column mt-3 cart-details">
            <span className="d-none d-md-block badge bg-danger text-white">0</span>
            {/* <p className="d-none d-md-block text-white cart-value">$500</p> */}
          </div>
        </nav>
      </div>
    </header>
  );
}
