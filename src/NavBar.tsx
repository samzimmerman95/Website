import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <Link className="navbar-brand" to="/">
        Sam Zimmerman
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/feed">
              Feed
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Adventures
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
