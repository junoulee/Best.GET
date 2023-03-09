import React from 'react';
import { carouselImages, Carousel } from '../components/carousel';
import NavBar from '../components/navbar';
import SmallDisplays from '../components/small-displays';

import Footer from '../components/footer';

export default function Home(props) {

  return (
    <>
      <NavBar />

      <section className="wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <Carousel images={carouselImages} />
            <SmallDisplays />

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
