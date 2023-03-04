import React from 'react';

export default function SmallDisplays() {
  return (
    <div className="col-lg-6">
      <div className="d-flex flex-wrap justify-content-between align-items-center small-cards">
        <div className="small-displays px-0 py-4">
          <img
            className="img-fluid rounded-3"
            src="./images/tablet.jpg" alt="" />
          <h3 className="display-text">Shop Tablets</h3>
        </div>
        <div className="small-displays px-0 py-4">
          <img
            className="img-fluid rounded-3"
            src="./images/laptop.webp" alt="" />.
          <h3 className="display-text">Shop Laptops</h3>
        </div>
        <div className="small-displays px-0 py-4">
          <img
            className="img-fluid rounded-3"
            src="./images/keyboard.webp" alt="" />
          <h3 className="display-text px-1">Shop Accessories</h3>
        </div>
        <div className="small-displays px-0 py-4">
          <img
            className="img-fluid rounded-3"
            src="./images/gray.avif" alt="" />
          <h3 className="display-text py-1">Shop Audio</h3>
        </div>
      </div>
    </div>
  );
}
