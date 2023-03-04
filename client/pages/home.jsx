import React, { useState } from 'react';
import { carouselImages, Carousel } from '../components/carousel';
import NavBar from '../components/navbar';
import SmallDisplays from '../components/small-displays';
import SearchResults from '../components/search-results';
import Footer from '../components/footer';
import FreeShipping from '../components/free-shipping';

export default function Home(props) {
  const [searchResults, setSearchResults] = useState();

  return (
    <>
      <NavBar onSearch={setSearchResults} />
      {searchResults && <FreeShipping />}
      <section className="wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            {!searchResults && <Carousel onSearch={setSearchResults} images={carouselImages} />}
            {!searchResults && <SmallDisplays onSearch={setSearchResults} />}
            {searchResults && <SearchResults results={searchResults} />}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
