import React from "react";
import { Link } from "react-router-dom";
import TitleImages from "../assets/images/adventures/titles";

type titleImage = {
  src: string;
  title: string;
  date: string;
  path: string;
};

function adventureTitle(image: titleImage) {
  return (
    <div className="relativeContainer pb-2">
      <img src={image.src} className="img-fluid" />
      <Link to={"/adventures" + image.path}>
        <div className="adventureTitleTextBox d-flex flex-column justify-content-center">
          <h4 className="text-white my-0">{image.title}</h4>
          <p className="text-white my-0">{image.date}</p>
        </div>
      </Link>
    </div>
  );
}

export default function adventureTitles() {
  let col1: any = [];
  let col2: any = [];

  for (let i = 0; i < TitleImages.length; i++) {
    let col = i % 2;
    switch (col) {
      case 0:
        col1.push(adventureTitle(TitleImages[i]));
        break;
      case 1:
        col2.push(adventureTitle(TitleImages[i]));
        break;
    }
  }

  return (
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 px-1">
      <div className="col px-md-1 text-center">{col1}</div>
      <div className="col px-md-1 text-center">{col2}</div>
    </div>
  );
}
