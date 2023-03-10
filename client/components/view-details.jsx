import React, { useEffect, useState } from 'react';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { BiCar } from 'react-icons/bi';
import { RiTruckLine } from 'react-icons/ri';
import { FiCheckCircle } from 'react-icons/fi';
import { GoPackage } from 'react-icons/go';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

export default function ViewDetails({ product }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {loading
        ? (
          <SpinnerWrapper css={override}>
            <RingLoader color="#36D7B7" loading={loading} size={150} />
          </SpinnerWrapper>
          )
        : (
          <section className="wrapper py-5">
            <div className="container-xxl">
              <div className="row">

                <div className="col-12 col-sm-6 col-md-6 col-lg-8 mb-4">
                  <img src={product.imageUrl} className="card-img-top product-img-large" alt="..." />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <div className="card w-100" >
                    <div className="card-header text-white bg-primary">{product.manufacturer}</div>
                    <div className="card-body">
                      <h4 className="card-title">{product.name}</h4>
                      <p className="card-text stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                      <h5 className="card-title price">  ${Number(product.price).toFixed(2).split('.')[0]}.
                        <span className="price-decimal">
                          {Number(product.price).toFixed(2).split('.')[1]}
                        </span></h5>
                      <p className="card-text" />
                      <a href="#" className="btn btn-primary add-to-cart">ADD TO CART</a>
                      <p className="card-text" />
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"><span className="detail-icons"><BiCar /></span>Free pickup, tomorrow at Laguna Niguel Store</li>
                      <li className="list-group-item"><span className="detail-icons"><RiTruckLine /></span>Free shipping, arrives by Tue, Feb 21 to Laguna Beach, 92651</li>
                      <li className="list-group-item"><span className="detail-icons green"><FiCheckCircle /></span>Free 30 day returns</li>
                      <li className="list-group-item"><span className="detail-icons"><GoPackage /></span>Sold and shipped by Walmart.com</li>
                      <li className="list-group-item"><span className="detail-icons red"><FaRegHeart /></span>Add to wishlist</li>
                    </ul>
                  </div>

                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-8 mb-4 about-item">
                  <h4 className="card-title">About this item</h4>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </section>
          )}
    </div>
  );
}
