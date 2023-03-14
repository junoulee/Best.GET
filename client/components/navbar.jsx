import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { SlHeart } from 'react-icons/sl';
import { VscAccount } from 'react-icons/vsc';
import { ProductSearch } from '../features/product-search';
import { Link } from 'react-router-dom';
import NavbarHeader from './navbar-header';

export default function NavBar() {
  return (

    <header className="header-upper py-1 ">
      <NavbarHeader/>
      <div className="container-xxl">
        <nav className="navbar navbar-expand-md bg-blue navbar-dark">
          <Link to="/" className="navbar-brand">
            <img src="/images/logo.png" alt="logo" width="90" height="60" className="d-inline-block align-text-top ms-3 mb-2 me-3"/>
          </Link>
          <Link to="/wishlist" className="justify-content-end ms-5 left-icons"><SlHeart /></Link>
          <Link to="/login" className="justify-content-end left-icons"><VscAccount /></Link>
          <Link to="/cart" className="justify-content-end left-icons shopping-cart px-0"><BsCart3 /></Link>
          <ProductSearch />
          <Link to="/wishlist" className="d-none d-md-block right-icons mx-3"><SlHeart /></Link>
          <Link to="/wishlist" className="d-none d-md-block navbar-text text-white mb-0">View Wishlist</Link>
          <Link to="/login" className="d-none d-md-block right-icons mx-3"><VscAccount/></Link>
          <Link to="/login" className="d-none d-md-block navbar-text text-white mb-0">My Account</Link>
          <Link to="/cart" className="d-none d-md-block right-icons shopping-cart mx-3"><BsCart3 /></Link>
          <div className="d-flex flex-column mt-3 cart-details">
            <span className="d-none d-md-block badge bg-danger text-white">0</span>
            {/* <p className="d-none d-md-block text-white cart-value">$500</p> */}
          </div>
        </nav>
      </div>
    </header>
  );
}
