import React from "react";

type Image = {
  id: number;
  src: string;
  title: string;
};

export function title(image: Image, title: string, date: string) {
  return (
    <div className="row">
      <div className="col px-2 pb-2">
        <div className="relativeContainer">
          <img src={image.src} className="img-fluid" alt={image.title}></img>
          <div className="adventureStoryTextBox d-flex flex-column align-items-center">
            <h3 className="text-white my-0">{title}</h3>
            <p className="text-white my-0">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export function fullImage(image: Image) {
  return (
    <div className="row">
      <div className="col px-2 pb-2">
        <img src={image.src} className="img-fluid" alt={image.title}></img>
      </div>
    </div>
  );
}
export function fullScreen(image: Image) {
  return (
    <div className="row">
      <div className="col px-2 pb-2 d-flex justify-content-center">
        <img
          src={image.src}
          className="img-fluid"
          style={{
            height: "100vh",
          }}
          alt={image.title}
        ></img>
      </div>
    </div>
  );
}

export function twoCols(imageLeft: Image, imageRight: Image) {
  return (
    <div className="row row-md-2 px-1 pb-2">
      <div className="col-md-6 px-md-1 d-flex align-items-center">
        <img
          src={imageLeft.src}
          className="img-fluid"
          alt={imageLeft.title}
        ></img>
      </div>
      <div className="col-md-6 px-md-1 d-flex align-items-center">
        <img
          src={imageRight.src}
          className="img-fluid"
          alt={imageRight.title}
        ></img>
      </div>
    </div>
  );
}

export function bigLeftSmallRight(imageLeft: Image, imageRight: Image) {
  return (
    <div className="row row-md-2 px-1 pb-2">
      <div className="col-md-8 px-md-1 d-flex align-items-center">
        <img
          src={imageLeft.src}
          className="img-fluid"
          alt={imageLeft.title}
        ></img>
      </div>
      <div className="col-md-4 px-md-1 d-flex align-items-center">
        <img
          src={imageRight.src}
          className="img-fluid"
          alt={imageRight.title}
        ></img>
      </div>
    </div>
  );
}
export function smallLeftBigRight(imageLeft: Image, imageRight: Image) {
  return (
    <div className="row row-md-2 px-1 pb-2">
      <div className="col-md-4 px-md-1 d-flex align-items-center">
        <img
          src={imageLeft.src}
          className="img-fluid"
          alt={imageLeft.title}
        ></img>
      </div>
      <div className="col-md-8 px-md-1 d-flex align-items-center">
        <img
          src={imageRight.src}
          className="img-fluid"
          alt={imageRight.title}
        ></img>
      </div>
    </div>
  );
}

export function imageLTextR(image: Image, text: string) {
  return (
    <div className="row row-md-2 px-1 pb-2">
      <div className="col-md-8 px-md-1">
        <img src={image.src} className="img-fluid" alt={image.title}></img>
      </div>
      <div className="col-md-4 px-md-1 text-dark d-flex align-items-center justify-content-center ">
        {text}
      </div>
    </div>
  );
}

export function imageRTextL(image: Image, text: string) {
  return (
    <div className="row row-md-2 px-1 pb-2">
      <div className="col-md-4 px-md-1 text-dark d-flex align-items-center justify-content-center ">
        {text}
      </div>
      <div className="col-md-8 px-md-1">
        <img src={image.src} className="img-fluid" alt={image.title}></img>
      </div>
    </div>
  );
}

export function threeCols(
  imageLeft: Image,
  imageCenter: Image,
  imageRight: Image
) {
  return (
    <div className="row row-md-2 px-1 pb-2">
      <div className="col-md-4 px-md-1 d-flex align-items-center">
        <img
          src={imageLeft.src}
          className="img-fluid"
          alt={imageLeft.title}
        ></img>
      </div>
      <div className="col-md-4 px-md-1 d-flex align-items-center">
        <img
          src={imageCenter.src}
          className="img-fluid"
          alt={imageCenter.title}
        ></img>
      </div>
      <div className="col-md-4 px-md-1 d-flex align-items-center">
        <img
          src={imageRight.src}
          className="img-fluid"
          alt={imageRight.title}
        ></img>
      </div>
    </div>
  );
}

export function centeredText(text: string) {
  return (
    <div className="row px-2 pb-2">
      <div className="col text-dark text-center ">{text}</div>
    </div>
  );
}
