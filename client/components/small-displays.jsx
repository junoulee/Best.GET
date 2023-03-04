import React from 'react';

export default function SmallDisplays({ onSearch }) {

  async function handleSearch(event, productName) {
    try {
      event.preventDefault();
      const response = await fetch('/api/products');
      const data = await response.json();
      const matchingResults = data.filter((product) =>
        product.name.toLowerCase().includes(productName.toLowerCase()) ||
        product.description.toLowerCase().includes(productName.toLowerCase())
      );
      onSearch(matchingResults);
    } catch (err) { console.error('Error fetching data:', err); }
  }

  return (
    <div className="col-lg-6">
      <div className="d-flex flex-wrap justify-content-between align-items-center small-cards">
        <div className="small-displays px-0 py-4">
          <a href="" className="display-search" onClick={(event) => handleSearch(event, 'tablet')}>
            <img
            className="img-fluid rounded-3"
            src="./images/tablet.jpg" alt="" />
            <h3 className="display-text">Shop Tablets</h3>
          </a>
        </div>
        <div className="small-displays px-0 py-4">
          <a href="" className="display-search" onClick={(event) => handleSearch(event, 'laptop')}>
            <img
            className="img-fluid rounded-3"
            src="./images/laptop.webp" alt="" />
            <h3 className="display-text">Shop Laptops</h3>
          </a>
        </div>
        <div className="small-displays px-0 py-4">
          <a href="" className="display-search" onClick={(event) => handleSearch(event, 'keyboard')}>
            <img
            className="img-fluid rounded-3"
            src="./images/keyboard.webp" alt="" />
            <h3 className="display-text px-1">Shop Accessories</h3>
          </a>
        </div>
        <div className="small-displays px-0 py-4">
          <a href="" className="display-search" onClick={(event) => handleSearch(event, 'headphones')}>
            <img
            className="img-fluid rounded-3"
            src="./images/gray.avif" alt="" />
            <h3 className="display-text py-1">Shop Audio</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
