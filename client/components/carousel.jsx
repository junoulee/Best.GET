import React, { useState, useEffect, useCallback } from 'react';

export function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const lengthOfArray = images.length;
  // const id = images[currentSlide].id;
  // const slideImage = images[currentSlide].image;

  const previous = useCallback(() => {
    const firstSlide = currentSlide === 0;
    const newIndex = firstSlide ? lengthOfArray - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  }, [currentSlide, lengthOfArray]);

  const next = useCallback(() => {
    const lastSlide = currentSlide === lengthOfArray - 1;
    const newIndex = lastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  }, [currentSlide, lengthOfArray]);

  const clickDot = (i) => {
    setCurrentSlide(i);
  };

  useEffect(() => {
    const slideShow = setTimeout(next, 5000);
    return () => clearTimeout(slideShow);
  }, [next, currentSlide]);

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
            {images.map((slide, i) =>
              <div className={`carousel-item ${i === currentSlide ? 'active' : ''}`} key={slide.id}>
                <img className="d-block w-100 img-fluid rounded-3" src={slide.image} alt={`Slide ${i}`} />
              </div>
            )}
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
    image: './images/ipad1.jpg'
  },
  {
    id: 2,
    image: './images/ipad2.jpg'
  },
  {
    id: 3,
    image: './images/ipad3.jpg'
  }
];
