import React from 'react';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SearchResults({ results, onProductClick }) {
  return (
    <>
      <h6 className="results-text fst-italic">{results.length} matching results found</h6>
      {(results.length === 0) && (
        <div className="container search-result-container">
          <div style={{ height: '33vh' }} />
          </div>
      )}
      <div className="container search-result-container">
        <div className="row">

          {results.map((result) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4" key={result.productId}>
              {/* {onClick = {() => onProductClick(result.productId)}} -- for some reason this isn't needed */}
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
    </>
  );
}
