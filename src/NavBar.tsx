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
            <Link className="nav-link" to="/adventures">
              Adventures
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              data-toggle="dropdown"
              // role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Projects
            </a>
            <div className="dropdown-menu">
              <Link className="text-dark dropdown-item" to="/weather">
                Weather
              </Link>
              <Link className="text-dark dropdown-item" to="/p5">
                P5.js Sketch
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
