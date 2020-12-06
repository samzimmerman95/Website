import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="header">
      <div className="jumbotron jumbotron-fluid pt-1">
        <div className="container">
          <NavBar />
        </div>
      </div>
    </div>
  );
}
