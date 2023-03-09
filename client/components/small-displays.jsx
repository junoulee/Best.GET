import React from 'react';
import { Link } from 'react-router-dom';

export default function SmallDisplays() {

  // async function handleSearch(event, productName) {
  //   try {
  //     event.preventDefault();
  //     const response = await fetch('/api/products');
  //     const data = await response.json();
  //     const matchingResults = data.filter((product) =>
  //       product.name.toLowerCase().includes(productName.toLowerCase()) ||
  //       product.category.toLowerCase().includes(productName.toLowerCase())
  //     );
  //     onSearch(matchingResults);
  //   } catch (err) { console.error('Error fetching data:', err); }
  // }

  return (
    <div className="col-lg-6">
      <div className="d-flex flex-wrap justify-content-between align-items-center small-cards">
        <div className="small-displays px-0 py-4">
          <Link to="/search?term=tablet" className="display-search">
            <img
            className="img-fluid rounded-3"
            src="./images/tablet.jpg" alt="" />
            <h3 className="display-text">Shop Tablets</h3>
          </Link>
        </div>
        <div className="small-displays px-0 py-4">
          <Link to="/search?term=laptop" className="display-search" >
            <img
            className="img-fluid rounded-3"
            src="./images/laptop.webp" alt="" />
            <h3 className="display-text">Shop Laptops</h3>
          </Link>
        </div>
        <div className="small-displays px-0 py-4">
          <Link to="/search?term=keyboard" className="display-search" >
            <img
            className="img-fluid rounded-3"
            src="./images/keyboard.webp" alt="" />
            <h3 className="display-text px-1">Shop Accessories</h3>
          </Link>
        </div>
        <div className="small-displays px-0 py-4">
          <Link to="/search?term=headphones" className="display-search" >
            <img
            className="img-fluid rounded-3"
            src="./images/gray.avif" alt="" />
            <h3 className="display-text py-1">Shop Audio</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
