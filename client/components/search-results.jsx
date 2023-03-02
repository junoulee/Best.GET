import React from 'react';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SearchResults({ results, onProductClick }) {

  return (
    <div className="container search-result-container">
      <div className="row">
        {results.map((result) => (

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4" key={result.productId}>
            <Link to={`/products/${result.productId}`} onClick={() => onProductClick(result.productId)}>
              <div className="card w-100">
                <a href="" className="heart-favorites "><FaRegHeart /></a>
                <img src={result.imageUrl} className="card-img-top" alt={result.name}/>
                <div className="card-body card-body-top">
                  <h5 className="card-title">{result.name}</h5>
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
                {/* <div className="card-body card-body-bottom">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div> */}
              </div>
            </Link>
          </div>

        ))}
      </div>
    </div>
  );
}
