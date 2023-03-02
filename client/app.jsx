import React from 'react';
import Home from './pages/home';
import { Routes, Route, useParams } from 'react-router-dom';
import ProductView from './features/product-view';

// import SearchResults from './pages/search-results';
// {/* <Route path="/search=" element={<SearchResults />} /> */}

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:productId" element={<ProductViewWithParams />} />
    </Routes>

  );
}
function ProductViewWithParams() {
  const { productId } = useParams();
  return <ProductView productId={productId} />;
}
