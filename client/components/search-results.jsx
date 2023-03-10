import React, { useEffect, useState } from 'react';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavBar from './navbar';
import FreeShipping from './free-shipping';
import Footer from './footer';
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

export default function SearchResults({ searchTerm }) {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function handleSearch(productName) {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        const matchingResults = data.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(matchingResults);
        setLoading(false);
      } catch (err) { console.error('Error fetching data:', err); }
    }
    handleSearch();
  }, [searchTerm]);

  return (
    <div>
      {loading
        ? (
          <SpinnerWrapper css={override}>
            <RingLoader color="#36D7B7" loading={loading} size={150} />
          </SpinnerWrapper>
          )
        : (
          <>
            <NavBar />
            <FreeShipping />
            <div className="container search-result-container">
              <h6 className="results-text fst-italic">{searchResults.length} matching results found</h6>
            </div>
            {(searchResults.length === 0) && (
            <div className="container search-result-container">
              <div style={{ height: '41.5vh' }} />
            </div>
            )}

            <div className="container search-result-container">
              <div className="row">

                {searchResults.map((result) => (
                  <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4" key={result.productId}>
                    <Link to={`/products/${result.productId}`}>
                      <div className="card w-100 result-card">
                        {/* this button will need to be worked on to be able to route user (cannot be a descendant of the Link above) */}
                        <button className="heart-favorites bg-white"><FaRegHeart /></button>
                        <img src={result.imageUrl} className="card-img-top" alt={result.name}/>
                        <div className="card-body card-body-top">
                          <h5 className="result-card-title">{result.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></li>
                          <li className="list-group-item">{result.manufacturer}</li>
                          <li className="list-group-item price">
                            ${Number(result.price).toFixed(2).split('.')[0]}.
                            <span className="price-decimal">
                              {Number(result.price).toFixed(2).split('.')[1]}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <Footer />
          </>
          )}
    </div>
  );
}
