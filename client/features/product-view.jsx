import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import { Link } from 'react-router-dom';

export default function ProductView({ productId }) {
  const [searchResults, setSearchResults] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchProductInfo() {
      try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }

    if (productId) {
      fetchProductInfo();
    }
  }, [productId]);

  return (
    <>
      <Link to="/">
        <NavBar onSearch={setSearchResults} />
      </Link>
      {!searchResults && product && (
      <section className="wrapper py-5">
        <div className="container-xxl">
          <div className="row">

            <div className="card w-100" >
              <img src={product.imageUrl} className="card-img-top" alt="..."/>
              <div className="card-header">
                {product.manufacturer}
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">nothing</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.price}</h5>
                <p className="card-text">nothing</p>
                <a href="#" className="btn btn-primary">ADD TO CART</a>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                <p className="card-text">{product.description}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      )}
    </>
  );

}
