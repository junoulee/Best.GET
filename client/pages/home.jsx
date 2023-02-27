import React from 'react';
import { carouselImages, Carousel } from '../components/carousel';

export default function Home(props) {
  return (
    <section className="wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <Carousel images={carouselImages}/>
          <SmallDisplays/>
        </div>
      </div>

    </section>
  );
}

function SmallDisplays() {
  return (
    <div className="col-lg-6">
      <div className="d-flex flex-wrap justify-content-between align-items-center small-cards">
        <div className="small-displays px-0 py-4">
          <img
            className="img-fluid rounded-3"
            src="tablet.jpg" alt="" />
        </div>
        <div className="small-displays px-0 py-4">
          <img
            className="img-fluid rounded-3"
            src="./laptop.webp" alt="" />
        </div>
        <div className="small-displays px-0 py-4">
          <img
            className="img-fluid rounded-3"
            src="./keyboard.webp" alt="" />
        </div>
        <div className="small-displays px-0 py-4">
          <img
            className="img-fluid rounded-3"
            src="./gray.avif" alt="" />
        </div>
      </div>
    </div>
  );
}
