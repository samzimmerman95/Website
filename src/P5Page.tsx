import React, { Component } from "react";
import p5 from "p5";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default class P5Page extends Component {
  myRef: any;
  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: any) => {
    p.setup = () => {
      p.createCanvas(800, 500);
      p.background(0);
    };

    p.draw = () => {};
  };

  componentDidMount() {
    new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return (
      <div className="container-fluid d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <NavBar />
          <div className="d-flex justify-content-center" ref={this.myRef}></div>
        </div>
        <Footer />
      </div>
    );
  }
}
