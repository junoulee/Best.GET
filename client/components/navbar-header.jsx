import React from 'react';

export default function NavbarHeader() {
  return (
    <div className="d-none d-md-block">
      <header className="header-top-strip" style={{ borderBottom: '1px solid #e5e5e5c0', width: '100%' }}>
        <div className="container-xxl">
          <div className="row top-bar">
            <div className="col-6">
              <p className="text-start text-white mb-0">Free Shipping for Orders Over $50 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">Contact Us</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
