import React, { useState, useEffect } from 'react';

export function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const lengthOfArray = images.length;
  const id = images[currentSlide].id;
  const slideImage = images[currentSlide].image;

  useEffect(() => {
    const slideShow = setTimeout(next, 5000);
    return () => clearTimeout(slideShow);
  });

  const previous = () => {
    const firstSlide = currentSlide === 0;
    const newIndex = firstSlide ? lengthOfArray - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const next = () => {
    const lastSlide = currentSlide === lengthOfArray - 1;
    const newIndex = lastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const clickDot = (i) => {
    setCurrentSlide(i);
  };

  return (
    <div className="col-lg-6">
      <div className="product-displays p-3">

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {images.map((slide, i) =>
              <li data-target="#carouselExampleIndicators" onClick={() => clickDot(i)} data-slide-to={i} key={slide.id} className={i === currentSlide ? 'active' : ''} />
            )}
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img key={id} className="d-block w-100 img-fluid rounded-3" src={slideImage} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img key={id} className="d-block w-100 img-fluid rounded-3" src={slideImage} alt="Second slide" />
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" onClick={previous} aria-hidden="true" />
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" >
              <span className="carousel-control-next-icon" onClick={next} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const carouselImages = [
  {
    id: 1,
    image: 'ipad1.jpg'
  },
  {
    id: 2,
    image: 'ipad2.jpg'
  },
  {
    id: 3,
    image: 'ipad3.jpg'
  }
];
