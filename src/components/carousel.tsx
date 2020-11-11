import React from "react";

const Img = "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

export const Carousel: React.FC = () => {
  return <>
    <div id="carousel" className="carousel slide m-auto" data-ride="carousel">
      <span>Наші роботи</span>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Img} className="d-block w-30 mx-auto" alt="..." />
        </div>

        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    </div>
  </>
}