import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="text-center text-lg-start bg-white">

        {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer">

          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <a href="" className="me-4 link-secondary">
            <BiCar />
          </a>
          <a href="" className="me-4 link-secondary">
            <BiCar />
          </a>
          <a href="" className="me-4 link-secondary">
            <BiCar />
          </a>
          <a href="" className="me-4 link-secondary">
            <BiCar />
          </a>
          <a href="" className="me-4 link-secondary">
            <BiCar />
          </a>
          <a href="" className="me-4 link-secondary">
            <BiCar />
          </a>

        </section> */}

        <section className="footer">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">

                <h6 className="text-uppercase fw-bold mb-4">
                  <img src="/images/logo.png" alt="logo" width="100" height="70" className="d-inline-block align-text-top ms-3 mb-2 me-3" />
                </h6>
                <p className="social-media">
                  <a className="social-icons" href=""><BsFacebook /></a>
                  <a className="social-icons" href=""><BsInstagram /></a>
                  <a className="social-icons" href=""><FiTwitter /></a>
                  <a className="social-icons" href=""><BsLinkedin /></a>
                  <a className="social-icons" href=""><BsGithub /></a>
                </p>
              </div>

              <div className="text-white col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4 mt-3">
                  Products
                </h6>
                <p>
                  <a href="" className="text-reset">Angular</a>
                </p>
                <p>
                  <a href="" className="text-reset">React</a>
                </p>
                <p>
                  <a href="" className="text-reset">Vue</a>
                </p>
                <p>
                  <a href="" className="text-reset">Laravel</a>
                </p>
              </div>

              <div className="text-white col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4 mt-3">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>

              <div className="text-white col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4 mt-3">Contact</h6>
                <p><i className="fas fa-home me-3 text-secondary" /> New York, NY 10012, US</p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89</p>
              </div>

            </div>

          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: '#e5e5e5c0' }}>
          © 2023 Copyright:
          <a className="text-reset copyright fw-bold" href=""> C1222 Final Project</a>
        </div>

      </footer>
    </div>
  );
}
