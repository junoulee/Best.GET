import React from 'react';
import Home from './pages/home';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import ProductView from './features/product-view';
import SearchResults from './components/search-results';
// import SearchResults from './pages/search-results';
// {/* <Route path="/search=" element={<SearchResults />} /> */}

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResultsWithParams />} />
      <Route path="/products/:productId" element={<ProductViewWithParams />} />
    </Routes>

  );
}
function ProductViewWithParams() {
  const { productId } = useParams();
  return <ProductView productId={productId} />;
}

function SearchResultsWithParams() {
  const query = useQuery();
  return <SearchResults searchTerm={ query.get('term') } />;
}
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
