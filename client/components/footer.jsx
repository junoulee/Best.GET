import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { FaHome, FaRegEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="text-center text-lg-start bg-white">
        <section className="footer">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
                <h6 className="text-uppercase fw-bold mb-4">
                  <img src="/images/logo.png" alt="logo" width="100" height="70" className="d-inline-block align-text-top ms-3 mb-2 me-3" />
                </h6>
                <p className="social-media">
                  <a className="social-icons" target="_blank" href="http://www.facebook.com" rel="noreferrer"><BsFacebook /></a>
                  <a className="social-icons" target="_blank" href="http://www.instagram.com" rel="noreferrer"><BsInstagram /></a>
                  <a className="social-icons" target="_blank" href="http://www.twitter.com" rel="noreferrer"><FiTwitter /></a>
                  <a className="social-icons" target="_blank" href="http://www.linkedin.com" rel="noreferrer"><BsLinkedin /></a>
                  <a className="social-icons" target="_blank" href="https://github.com/junoulee" rel="noreferrer"><BsGithub /></a>
                </p>
              </div>
              <div className="text-white col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 mt-3"> About Us</h6>
                <p>
                  <a href="https://www.corporateinformation.com" target="_blank" className="text-reset" rel="noreferrer" >Corporate Information</a>
                </p>
                <p>
                  <a href="https://jobs.com" target="_blank" className="text-reset" rel="noreferrer">Careers</a>
                </p>
                <p>
                  <a href="https://ask.com" target="_blank" className="text-reset" rel="noreferrer">FAQ</a>
                </p>
                <p>
                  <a href="https://github.com/junoulee" target="_blank" className="text-reset" rel="noreferrer">Developers</a>
                </p>
              </div>
              <div className="text-white col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 mt-3">
                  Useful links
                </h6>
                <p>
                  <Link to="/login" className="text-reset">Log In</Link>
                </p>
                <p>
                  <Link to="/wishlist" className="text-reset">Wishlist</Link>
                </p>
                <p>
                  <Link to="/cart" className="text-reset">View Cart</Link>
                </p>
                <p>
                  <a href="https://github.com/junoulee/Best.GET#readme" className="text-reset">Help</a>
                </p>
              </div>
              <div className="text-white col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 mt-3">Contact</h6>
                <p><FaHome /> La Habra, CA 90631, USA</p>
                <p><FaRegEnvelope /> junoulee@gmail.com</p>
                <p><FaPhone /> + 01 234 567 88</p>
                <p><FaPrint /> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: '#e5e5e5c0' }}>
          © 2023 Copyright:
          <a className="text-reset copyright fw-bold" href=""> Best.GET</a>
        </div>

      </footer>
    </div>
  );
}
