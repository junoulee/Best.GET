import React from 'react';

export default function Home(props) {
  return (
    <section className="wrapper py-5">
      <div className="container-xxl">
        <div className="row">

          <div className="col-lg-6">
            <div className="product-displays p-3">
              {/* <img src="./logo.png" alt=""
              className="img-fluid rounded-3"/> */}
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to="1" />

                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100 img-fluid rounded-3" src="./stud.png" alt="First slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100 img-fluid rounded-3" src="./logo.png" alt="Second slide"/>
                  </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only" />
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center small-cards">
              <div className="small-displays p-3">
                <img
                  className="img-fluid rounded-3"
                src="./stud.png" alt="" />
              </div>
              <div className="small-displays p-3">
                <img
                  className="img-fluid rounded-3"
                  src="./stud.png" alt="" />
              </div>
              <div className="small-displays p-3">
                <img
                  className="img-fluid rounded-3"
                  src="./stud.png" alt="" />
              </div>
              <div className="small-displays p-3">
                <img
                  className="img-fluid rounded-3"
                  src="./stud.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
