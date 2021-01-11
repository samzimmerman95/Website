import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="row border-top mt-5 pt-2 mx-0">
      <div className="col-md d-md-flex align-items-center text-center justify-content-start pl-md-3">
        <Link className="navbar-brand text-dark" to="/">
          Sam Zimmerman
        </Link>
      </div>
      <div className="col-md d-md-flex text-center justify-content-center align-items-center">
        <a
          className="link-icon"
          href="https://www.instagram.com/sammyzimm/"
          target="_blank"
        >
          <i className="fab fa-instagram fa-2x px-3"></i>
        </a>

        <a
          className="link-icon"
          href="https://www.youtube.com/channel/UCUifosWwaDhudQAO4Wqr2lw"
          target="_blank"
        >
          <i className="fab fa-youtube fa-2x px-3"></i>
        </a>
        <a
          className="link-icon"
          href="https://github.com/samzimmerman95"
          target="_blank"
        >
          <i className="fab fa-github fa-2x px-3"></i>
        </a>
        <a
          className="link-icon"
          href="https://www.linkedin.com/in/sz2020/"
          target="_blank"
        >
          <i className="fab fa-linkedin fa-2x px-3"></i>
        </a>
      </div>

      <div className="col-md d-md-flex align-items-center text-center small justify-content-end pr-md-3">
        © 2021
      </div>
    </div>
  );
}
