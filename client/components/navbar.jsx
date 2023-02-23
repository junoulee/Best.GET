import React from 'react';
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
          <a className="justify-content-end left-icons shopping-cart"><BsCart3/></a>
          <form className="d-flex w-100">
            <div className="input-group flex-grow-1">
              <input type="text" className="form-control ms-3 border-end-0" placeholder="Search products"/>
              <a className="input-group-text me-3 search-button"><BsSearch/></a>
            </div>
          </form>
          <a className="d-none d-sm-block right-icons mx-3"><SlHeart /></a>
          <a className="d-none d-sm-block navbar-text text-white">View Wishlist</a>
          <a className="d-none d-sm-block right-icons mx-3"><VscAccount /></a>
          <a className="d-none d-sm-block navbar-text text-white">Log In<br />My Account</a>
          <a className="d-none d-sm-block right-icons shopping-cart mx-3"><BsCart3 /></a>
        </nav>

      </div>
    </header>

  );
}
