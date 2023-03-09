import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import FreeShipping from '../components/free-shipping';
import ViewDetails from '../components/view-details';
import Footer from '../components/footer';
// import { Link } from 'react-router-dom';

import SearchResults from '../components/search-results';

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

  // useEffect(() => {
  //   console.log(searchResults);
  //   if (searchResults) {

  //     navigate('/');
  //   }
  // }, [searchResults, navigate]);

  return (
    <>
      {/* <Link to="/"> */}
      <NavBar onSearch={setSearchResults} />

      {/* </Link> */}
      {!searchResults && product && (
        <>
          <FreeShipping />
          <ViewDetails product={product} />
        </>
      )}
      {searchResults && <SearchResults results={searchResults} />}
      <Footer />
    </>
  );

}
