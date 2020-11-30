import React from "react";
import { myImage } from "./createImageList";
import { Link } from "react-router-dom";

export function threeCols(
  images: myImage[],
  startID: number,
  endID: number,
  year: number
) {
  let col1: any = [];
  let col2: any = [];
  let col3: any = [];

  images.forEach((image) => {
    if (image.id < startID || image.id > endID) {
      return;
    } else {
      switch (image.col) {
        case 1:
          col1.push(
            <Link
              to={{
                pathname: "/feed/fullView",
                state: { id: image.id, year: year },
              }}
            >
              <img
                src={image.src}
                className="img-fluid pb-2"
                alt={image.title}
              ></img>
            </Link>
          );
          break;
        case 2:
          col2.push(
            <Link
              to={{
                pathname: "/feed/fullView",
                state: { id: image.id, year: year },
              }}
            >
              <img
                src={image.src}
                className="img-fluid pb-2"
                alt={image.title}
              ></img>
            </Link>
          );
          break;
        case 3:
          col3.push(
            <Link
              to={{
                pathname: "/feed/fullView",
                state: { id: image.id, year: year },
              }}
            >
              <img
                src={image.src}
                className="img-fluid pb-2"
                alt={image.title}
              ></img>
            </Link>
          );
          break;
      }
    }
  });

  return (
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ">
      <div className="col px-md-1 text-center">{col1}</div>
      <div className="col px-md-1 text-center">{col2}</div>
      <div className="col px-md-1 text-center">{col3}</div>
    </div>
  );
}

// pano: 2/3 left, 1/3 right
export function twoColsPanoLeft(
  imagePano: myImage,
  imageRight: myImage,
  year: number
) {
  return (
    <div className="row row-sm-1 row-md-2 row-lg-3">
      <div className="col-md-8 px-md-1 text-center">
        <Link
          to={{
            pathname: "/feed/fullView",
            state: { id: imagePano.id, year: year },
          }}
        >
          <img
            src={imagePano.src}
            className="img-fluid pb-2"
            alt={imagePano.title}
          ></img>
        </Link>
      </div>
      <div className="col-md-4 px-md-1 text-center">
        <Link
          to={{
            pathname: "/feed/fullView",
            state: { id: imageRight.id, year: year },
          }}
        >
          <img
            src={imageRight.src}
            className="img-fluid pb-2"
            alt={imageRight.title}
          ></img>
        </Link>
      </div>
    </div>
  );
}

// pano: 1/3 left, 2/3 right
export function twoColsPanoRight(
  imagePano: myImage,
  imageLeft: myImage,
  year: number
) {
  return (
    <div className="row row-sm-1 row-md-2 row-lg-3">
      <div className="col-md-4 px-md-1 text-center">
        <Link
          to={{
            pathname: "/feed/fullView",
            state: { id: imageLeft.id, year: year },
          }}
        >
          <img
            src={imageLeft.src}
            className="img-fluid pb-2"
            alt={imageLeft.title}
          ></img>
        </Link>
      </div>
      <div className="col-md-8 px-md-1 text-center">
        <Link
          to={{
            pathname: "/feed/fullView",
            state: { id: imagePano.id, year: year },
          }}
        >
          <img
            src={imagePano.src}
            className="img-fluid pb-2"
            alt={imagePano.title}
          ></img>
        </Link>
      </div>
    </div>
  );
}

// pano entire width
export function oneColPano(imagePano: myImage, year: number) {
  return (
    <div className="row">
      <div className="col px-md-1 text-center">
        <Link
          to={{
            pathname: "/feed/fullView",
            state: { id: imagePano.id, year: year },
          }}
        >
          <img
            src={imagePano.src}
            className="img-fluid pb-2"
            alt={imagePano.title}
          ></img>
        </Link>
      </div>
    </div>
  );
}

// Public Link of image in the folder:
// https://drive.google.com/file/d/1cY-mtBLEQr-mWexB5Ap7H-Oi6402dT8C/view?usp=sharing

// This is the ID extracted from that link:
// 1cY-mtBLEQr-mWexB5Ap7H-Oi6402dT8C

// Put that ID into this link and the picture will be accessible
// http://drive.google.com/uc?export=view&id=<XXXX>

// Use that link for the <img> src.
