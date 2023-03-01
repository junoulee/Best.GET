import React from 'react';

export default function SmallDisplays() {
  return (
    <div className="col-lg-6">
      <div className="d-flex flex-wrap justify-content-between align-items-center small-cards">
        <div className="small-displays px-0 py-4">
          <img
            className="img-fluid rounded-3"
            src="./images/tablet.jpg" alt="" />
        </div>
        <div className="small-displays px-0 py-4">
          <img
            className="img-fluid rounded-3"
            src="./images/laptop.webp" alt="" />.
        </div>
        <div className="small-displays px-0 py-4">
          <img
            className="img-fluid rounded-3"
            src="./images/keyboard.webp" alt="" />
        </div>
        <div className="small-displays px-0 py-4">
          <img
            className="img-fluid rounded-3"
            src="./images/gray.avif" alt="" />
        </div>
      </div>
    </div>
  );
}
