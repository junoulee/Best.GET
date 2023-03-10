import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

export function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const lengthOfArray = images.length;

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
                <Link to="/search?term=ipad" role="button" tabIndex="-1" >
                  <img className="d-block w-100 img-fluid rounded-3" src={slide.image} alt={`Slide ${i}`} />
                </Link>
              </div>
            )}
            <a className="carousel-control-prev" href="#" role="button" data-slide="prev" onClick={(event) => { previous(); event.stopPropagation(); }}>
              <span className="carousel-control-prev-icon" onClick={previous} aria-hidden="true" />
            </a>
            <a className="carousel-control-next" href="#" role="button" data-slide="next" onClick={(event) => { next(); event.stopPropagation(); }}>
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
