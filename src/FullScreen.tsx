import React from "react";
import Images2016 from "./assets/images/feed/Images2016";

export default function FullScreen() {
  let images = Images2016.map((item) => {
    let i = (
      <img
        className="img-fluid"
        src={item.src}
        alt="slide"
        style={{
          maxHeight: "92vh",
          objectFit: "contain",
        }}
      ></img>
    );
    if (item.id === 0) {
      return (
        <div className="carousel-item d-flex justify-content-center mt-4 active">
          {i}
        </div>
      );
    } else {
      return (
        <div className="carousel-item d-flex justify-content-center mt-4">
          {i}
        </div>
      );
    }
  });

  return (
    <div className="container">
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">{images}</div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* <div className="d-flex justify-content-center mt-4">
        <img
          className="img-fluid"
          src={Images2016[24].src}
          alt="Second slide"
          style={{
            maxHeight: "92vh",
            objectFit: "contain",
          }}
        ></img>
      </div> */}
    </div>
  );
}
