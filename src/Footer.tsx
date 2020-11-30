import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="jumbotron fixed bottom mb-0 bg-black">
      <div className="container">
        <div className="row text-white">
          <div className="col-sm text-center">1 of 3</div>
          <div className="col-sm text-center">
            <Link to="/weather">Weather</Link>
          </div>

          <div className="col-sm text-center">
            <Link to="/p5">p5</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
