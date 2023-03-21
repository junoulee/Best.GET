import React from 'react';
import Home from './pages/home';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import ProductView from './features/product-view';
import SearchResults from './components/search-results';
import LogInPage from './components/login-page';
import WishList from './components/wishlist';
import ShoppingCart from './components/shopping-cart';
import CreateAccount from './components/create-account';

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResultsWithParams />} />
      <Route path="/products/:productId" element={<ProductViewWithParams />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/register" element={<CreateAccount />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/cart" element={<ShoppingCart />} />
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
