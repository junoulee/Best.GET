import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import FreeShipping from '../components/free-shipping';
import ViewDetails from '../components/view-details';
import Footer from '../components/footer';
// import { Link } from 'react-router-dom';

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
      {/* <Link to="/"> */}
      <NavBar onSearch={setSearchResults} />
      <FreeShipping />
      {/* </Link> */}
      {!searchResults && product && (
        <ViewDetails product={product}/>
      )}
      <Footer />
    </>
  );

}
